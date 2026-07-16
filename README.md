# ktayl-solution-web

[![CI](https://github.com/andrelair-platform/ktayl-solution-web/actions/workflows/ci.yml/badge.svg)](https://github.com/andrelair-platform/ktayl-solution-web/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Astro-6-orange)](https://astro.build)
[![Supply chain: cosign](https://img.shields.io/badge/supply%20chain-cosign%20signed-green)](https://github.com/sigstore/cosign)

> Public website for ktayl.solution — an insurance consulting firm covering seven lines of business. Built with Astro 6 and Tailwind CSS 4, containerised with Docker (nginx), pushed to Harbor, and deployed on the minicloud Kubernetes platform via ArgoCD and Cloudflare Tunnel.

**Live site:** [https://ktayl.devandre.sbs](https://ktayl.devandre.sbs)

---

## Table of Contents

- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [CI/CD Pipeline](#cicd-pipeline)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Architecture

```
ktayl-solution-web (this repo)
    │
    │  npm run build  →  Docker build (nginx)
    ▼
harbor.10.0.0.200.nip.io/library/ktayl-solution-web:<sha>
    │
    │  CI bumps Kustomize overlay in minicloud-gitops
    ▼
ArgoCD → k3s cluster
    │
Cloudflare Tunnel → https://ktayl.devandre.sbs
```

| Component | Detail |
|---|---|
| Framework | Astro 6.4 + Tailwind CSS 4 |
| Runtime image | nginx (static site) |
| Registry | `harbor.10.0.0.200.nip.io/library/ktayl-solution-web` |
| GitOps | Kustomize base+overlays in `minicloud-gitops/services/ktayl-solution-web/` |
| Public URL | [ktayl.devandre.sbs](https://ktayl.devandre.sbs) via Cloudflare Tunnel |

---

## Prerequisites

| Tool | Version | Notes |
|---|---|---|
| Node.js | ≥ 22.12 | Required by Astro 6 and Tailwind CSS 4 |
| npm | bundled with Node | |
| Docker | any recent | Only needed for building the container image locally |

---

## Getting Started

### Run locally

```bash
git clone https://github.com/andrelair-platform/ktayl-solution-web.git
cd ktayl-solution-web
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). Hot reload is enabled.

### Build

```bash
npm run build    # static output to ./dist/
npm run preview  # preview the built site locally
```

### Build the container locally

```bash
SHORT_SHA=$(git rev-parse --short HEAD)
docker build -t ktayl-solution-web:${SHORT_SHA} .
docker run -p 8080:8080 ktayl-solution-web:${SHORT_SHA}
```

Open [http://localhost:8080](http://localhost:8080).

---

## CI/CD Pipeline

Every push to `main` triggers `.github/workflows/ci.yml`:

```
push to main
    │
    ├─ 1. Connect to Tailscale (OAuth — TS_OAUTH_CLIENT_ID / TS_OAUTH_SECRET)
    ├─ 2. Trust minicloud CA on the runner (raw PEM — no base64 decode)
    ├─ 3. docker build → push to harbor.10.0.0.200.nip.io/library/ktayl-solution-web:<sha>
    ├─ 4. Trivy scan — fails on unfixed CRITICAL CVEs
    ├─ 5. cosign sign (keyless — GitHub OIDC → Sigstore Fulcio)
    ├─ 6. syft SBOM (CycloneDX JSON) — attached as OCI referrer
    └─ 7. GPG-signed commit to minicloud-gitops bumping Kustomize overlay
              └─ ArgoCD webhook → rolling update
```

**Branch behaviour:**

| Branch | Image tag | Trivy | Cosign | SBOM | GitOps bump |
|---|---|---|---|---|---|
| `main` | `<sha>` | yes | yes | yes | Kustomize overlay in minicloud-gitops |
| `staging` | `staging-<sha>` | yes | yes | no | no |
| `dev` | `dev-<sha>` | yes | no | no | no |

**Required secrets:**

All 7 secrets are **org-level on `andrelair-platform`** (visibility: all). New repos inherit them automatically — no per-repo setup needed.

| Secret | Purpose |
|---|---|
| `TS_OAUTH_CLIENT_ID` | Tailscale OAuth client ID — joins tailnet as `tag:ci` |
| `TS_OAUTH_SECRET` | Tailscale OAuth secret |
| `MINICLOUD_CA_CERT` | Self-signed CA PEM — lets Docker daemon and cosign trust Harbor TLS |
| `HARBOR_USER` | Harbor registry username |
| `HARBOR_PASSWORD` | Harbor registry password |
| `GITOPS_TOKEN` | GitHub PAT (`repo` scope) for committing to `minicloud-gitops` |
| `GPG_PRIVATE_KEY` | Armored GPG private key for signing gitops commits (key ID `FD6D39D681DEFA34`) |

---

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `npm run dev` fails with Node version error | Node < 22.12 installed | Switch to Node ≥ 22.12 via `nvm use 22` or `fnm use 22` |
| Blank page after `npm run build` | Asset path mismatch — Astro `base` config | Check `astro.config.mjs` — no `base` prefix is needed for root-domain deployment |
| Container starts but pages return 404 | nginx not serving SPA fallback | `nginx.conf` has `try_files $uri $uri/ /index.html` — verify it was not accidentally removed |
| CI fails: Harbor push rejected | Runner not on Tailscale tailnet | Ensure the Tailscale OAuth step runs before Docker login |
| CI fails: CRITICAL CVEs from Trivy | Upstream nginx base image has unfixed packages | Bump the nginx base image tag in the `Dockerfile` |

---

## License

[MIT](LICENSE) © andrelair-platform

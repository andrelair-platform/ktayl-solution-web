# Changelog

## [0.1.1](https://github.com/andrelair-platform/ktayl-solution-web/compare/ktayl-solution-web-v0.1.0...ktayl-solution-web-v0.1.1) (2026-08-14)


### Features

* **catalog:** add Backstage catalog-info.yaml ([cd811aa](https://github.com/andrelair-platform/ktayl-solution-web/commit/cd811aa2603e99d79d7a708848dc82c3fa251398))
* initial ktayl-solution public website ([80ef391](https://github.com/andrelair-platform/ktayl-solution-web/commit/80ef391975dc0df2e84d67d683743bce0946596a))
* migrate to nginx:unprivileged base image (port 8080, UID 101) ([bab775e](https://github.com/andrelair-platform/ktayl-solution-web/commit/bab775e66aff65fb3330e3aab0e76377794f7bd5))
* solutions & services HDI Global France ([#17](https://github.com/andrelair-platform/ktayl-solution-web/issues/17)) ([c2daaf1](https://github.com/andrelair-platform/ktayl-solution-web/commit/c2daaf153a9fd1de14b838a44bc6fcc9c496691b))
* **supply-chain:** add Cosign keyless signing + SBOM to CI ([5158803](https://github.com/andrelair-platform/ktayl-solution-web/commit/51588030ce8b10b6858a91b0c3c0558c0ec3810e))


### Bug Fixes

* allow network.host in buildkitd for apk upgrade (patch CVE-2026-31789, CVE-2026-42945) ([fe7e2d8](https://github.com/andrelair-platform/ktayl-solution-web/commit/fe7e2d871a0849befc02e440a1e0d0656210d60d))
* apk update before upgrade (apk-tools 3.x on Alpine 3.22 requires fresh index) ([a59ecef](https://github.com/andrelair-platform/ktayl-solution-web/commit/a59ecef20c7e7886fdfc901dd2f6fa80ed65c775))
* apk upgrade to pull patched libcrypto3+nginx (CVE-2026-31789, CVE-2026-42945) ([63c4f31](https://github.com/andrelair-platform/ktayl-solution-web/commit/63c4f318a7316c9723690c1d5cf32bde355f7169))
* bump nginx base to 1.28-alpine (CVE-2026-31789 openssl) ([91001ad](https://github.com/andrelair-platform/ktayl-solution-web/commit/91001adbcf4e2d8ef375e79418cc94597859f857))
* **ci:** add OCI Accept header to Harbor pre-flight manifest check ([8e0da58](https://github.com/andrelair-platform/ktayl-solution-web/commit/8e0da587dc3069f51a5816ae9f5a85920b3b9af5))
* replace backslash-escaped quotes in style url() for Astro 7 compat ([8e9f347](https://github.com/andrelair-platform/ktayl-solution-web/commit/8e9f347d9cd17a3678c63be484fbd409b05d80bf))
* **supply-chain:** add Trivy CRITICAL scan step + Dependabot ([9dd4f6f](https://github.com/andrelair-platform/ktayl-solution-web/commit/9dd4f6fc5afe61413137cbde841345c66d89f49b))
* use --network=host for apk upgrade in BuildKit container driver ([31acfb8](https://github.com/andrelair-platform/ktayl-solution-web/commit/31acfb8b741637f7a50f4f38e136bc01d06e73fd))
* USER root for apk update/upgrade (nginx-unprivileged runs as non-root) ([5b1fefa](https://github.com/andrelair-platform/ktayl-solution-web/commit/5b1fefa9af09888ddb2a0391b3c961aca8c229ea))

## Changelog

All notable changes to ktayl-solution-web are documented here.

This file is maintained by [release-please](https://github.com/googleapis/release-please).

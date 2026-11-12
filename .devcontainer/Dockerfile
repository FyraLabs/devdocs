FROM ghcr.io/ultramarine-linux/ultramarine:44

ENV NO_UPDATE_NOTIFIER=1
ENV FORCE_COLOR=1
ARG PNPM_VERSION=$PNPM_VERSION
ARG USERNAME=$USERNAME
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Do not do this outside of a container for the love of God.
RUN groupadd --gid $USER_GID $USERNAME && \
useradd --uid $USER_UID --gid $USER_GID -m $USERNAME && \
echo "$USERNAME ALL = (ALL) NOPASSWD: ALL" > /etc/sudoers.d/$USERNAME && \
mkdir -p /workspaces/docs && \
chown -R $USERNAME /workspaces/devdocs

USER 1000:1000
WORKDIR /workspaces/devdocs

# Copy the bare minimum for dep fetching
COPY ../package.json ../pnpm-lock.yaml ../pnpm-workspace.yaml .

# Update this when UM45 has a container
RUN sudo dnf install -y pnpm nodejs && \
pnpm install --frozen-lockfile

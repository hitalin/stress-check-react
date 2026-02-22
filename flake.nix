{
  description = "nix flake configuration for nodejs project";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }@inputs:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [];
        };
        nodejs = pkgs.nodejs_22;
      in {
        devShell = pkgs.mkShell {
          buildInputs = [ nodejs pkgs.corepack ];
          shellHook = ''
            corepack enable
            pnpm install
          '';
        };
        formatter = pkgs.nixpkgs-fmt;
      }
    );
}

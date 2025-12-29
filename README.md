# The Data Pipeline

An introduction to the Data professional field made using [Astro](https://astro.build/), [MDX](https://mdxjs.com/), and [Mermaid](https://mermaid.js.org/).

Hosted on GitHub Pages: https://konilo.github.io/the-data-pipeline/

## Development setup

* Clone the repo.
```sh
git clone git@github.com:Konilo/the-data-pipeline.git
```

* Open it using VS Code.
```sh
code the-data-pipeline
```

* Reopen the workspace in the development container.

Press F1 and search "Dev Containers: Reopen in Container"

* Launch the development website preview.

```sh
npm run dev
```

* You can now make changes and see them reflected in the website preview. Some edits require a restart of `npm run dev`.

* The deployment to GitHub Pages is carried out (i) on pushes to the `main` branch by the "Deploy to GitHub Pages" workflow or (ii) at any time via a manual trigger of that same workflow in the GitHub repo (thanks to `workflow_dispatch`).

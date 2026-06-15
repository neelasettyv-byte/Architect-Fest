# React CI/CD Practice App

A deliberately small React app (a calculator) built for **one purpose**: practicing CI/CD pipelines.

It has the three things a pipeline cares about:
- **Lint** — `npm run lint`
- **Test** — `npm test` (7 tests)
- **Build** — `npm run build` (produces a `dist/` folder)

That's the whole point. Your pipeline will run these three steps automatically.

---

## Step 1 — Run it on your own machine first

You need Node.js installed (https://nodejs.org — get the LTS version).

```bash
npm install      # install dependencies
npm run dev      # run the app locally (open the URL it prints)
npm test         # run the tests — all should pass
npm run build    # build for production
```

Do this BEFORE touching any pipeline. You need to see it working by hand first.

---

## Step 2 — Put it on GitHub

1. Create a free account at https://github.com if you don't have one.
2. Create a new **empty** repository (no README, no .gitignore — this project has them).
3. In this project folder, run:

```bash
git init
git add .
git commit -m "Initial commit: React CI/CD practice app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/react-cicd-practice.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

---

## Step 3 — Build your first pipeline

This is your practice goal. Since you're aiming for **Azure DevOps**, here is the order:

1. **Learn Azure first** — deploy a web app by hand (see the Azure Fundamentals path on Microsoft Learn).
2. **Then** create an Azure DevOps project and a pipeline that:
   - installs dependencies (`npm install`)
   - runs the tests (`npm test`)
   - builds the app (`npm run build`)
   - deploys the `dist/` folder to Azure

When you're ready for the pipeline file, ask and I'll write the complete `azure-pipelines.yml` for you.

---

## What each file does

| File | Purpose |
|------|---------|
| `src/App.jsx` | The calculator UI |
| `src/calculate.js` | Pure logic — easy to unit test |
| `src/App.test.jsx` | The tests your pipeline runs |
| `package.json` | Defines the lint/test/build commands |
| `vite.config.js` | Build + test configuration |

Keep it simple. The app is not the point — the pipeline is.

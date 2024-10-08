# Mangomart

# Mangomart is a team project By rakesh biswash and nafis ahamed

# just pull and give command npm i but dosent provide env file if you need please contract my gmail nafisahamed14@gmail.com

- Live-Link url[@https://mangomart-5f69b.web.app/]
- Backend Github [@https://github.com/nafis200/Mangomart-backend]

# Feature 

 - Using JWT tokens for security purpose.
 - Integrate two types of payment systems: Stripe and SSLCommerz.
 - User order mango.
 - User see mango price details each and everything.
 - The admin receives orders and delivers the mangoes
 - Admin make the user

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

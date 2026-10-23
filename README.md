# Gerador de Recibos e Notas - Pepe Climatização

## 1. Firebase (console.firebase.google.com)
1. Crie um projeto.
2. **Authentication > Sign-in method**: ative **E-mail/senha**.
3. **Authentication > Users > Adicionar usuário**:
   - E-mail: `61871894000180@pepe-recibos.app` (CNPJ só com números)
   - Senha: `123456`
4. **Firestore Database**: crie o banco (modo produção) e, na aba **Regras**, cole o conteúdo de `firestore.rules` e publique.
5. **Configurações do projeto > Seus apps > Web (</>)**: copie o `firebaseConfig` para `firebase-config.js`.

## 2. Publicar
- **Firebase Hosting**: `npm i -g firebase-tools`, `firebase login`, `firebase init` (use os arquivos existentes) e `firebase deploy`.
- **GitHub Pages**: suba os arquivos no repositório e ative Pages. Depois adicione o domínio em **Authentication > Settings > Domínios autorizados**.

Para testar no computador use um servidor local (`npx serve .`); abrir o arquivo direto não funciona com módulos.

## Segurança
- A `apiKey` do Firebase é pública por natureza; quem protege os dados são as regras do Firestore.
- A senha `123456` é fraca. Troque assim que possível em Authentication > Users.

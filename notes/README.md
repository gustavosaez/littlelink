# Instruções para Implantação no AWS Amplify

Este diretório contém os arquivos de build do site Ephe, configurados para serem hospedados no subdiretório `/notes` do seu site.

## Arquivos de Configuração

- `amplify-config.json`: Contém as regras de reescrita para o AWS Amplify
- `customHttp.yml`: Contém os cabeçalhos personalizados para corrigir os problemas de MIME type (formato YAML)

## Passos para Implantação

1. Faça upload de todos os arquivos para o seu repositório GitHub, **incluindo o arquivo `customHttp.yml`** que deve estar na raiz do repositório
2. Configure o AWS Amplify para usar o seu repositório
3. No console do AWS Amplify, vá para "App settings" > "Rewrites and redirects"
4. Adicione a seguinte regra de reescrita:
   - Source address: `/notes/<*>`
   - Target address: `/notes/index.html`
   - Type: 200 (Rewrite)
5. Reimplante o aplicativo

O arquivo `customHttp.yml` contém a seguinte configuração:

```yaml
customHeaders:
  - pattern: "/notes/*.js"
    headers:
      - key: "Cache-Control"
        value: "public, max-age=31536000, immutable"
      - key: "Content-Type"
        value: "application/javascript"
  - pattern: "/notes/*.css"
    headers:
      - key: "Cache-Control"
        value: "public, max-age=31536000, immutable"
      - key: "Content-Type"
        value: "text/css"
```

Estas configurações devem resolver o problema da página em branco e garantir que os arquivos JavaScript e CSS sejam servidos com os MIME types corretos.


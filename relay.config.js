module.exports = {
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  artifactDirectory: './src/__generated__',
  schema: 'schema.graphql',
  src: './src/',
  watch: true,
  language: 'typescript',
}

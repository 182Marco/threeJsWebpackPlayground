const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Cambia in 'production' quando fai una build finale
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js", // Nome del file di output
    path: path.resolve(__dirname, "dist"), // Percorso della cartella di output
    clean: true, // Pulisce la cartella dist prima di ogni build
  },
  devtool: "source-map", // Aggiungi la generazione delle mappe sorgenti per il debug
  devServer: {
    static: path.resolve(__dirname, "dist"), // Servire i file statici dalla cartella dist
    port: 5000, // Porta di sviluppo
    open: true, // Apre il browser automaticamente
    hot: true, // Attiva il "hot module replacement" (aggiornamenti senza ricaricare la pagina)
    historyApiFallback: true, // Gestione delle route in caso di single-page application
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile il codice JS
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/, // Gestisce i file CSS
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/, // Gestisce i file HTML
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Modello HTML di partenza
      inject: "body", // Inserisce lo script bundle.js nel body
    }),
  ],
  resolve: {
    fallback: {
      fs: false, // Esclude fs dal bundle (utile per evitare errori in browser)
      path: false,
      os: false, // Esclude anche altri moduli Node.js se non necessari
    },
  },
};

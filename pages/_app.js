import "../styles/globals.css";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <div>
          <Component {...pageProps} />
        </div>
      </Layout>
    </div>
  );
}

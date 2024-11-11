import ToastPlayground from "./components/ToastPlayground/ToastPlayground.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ToastProvider from "./components/ToastProvider.jsx";

function App() {
  return (
    <>
      <ToastProvider>
        <ToastPlayground />
        <Footer />
      </ToastProvider>
    </>
  );
}

export default App;

import { Header } from "@/components";
import { Footer, Intro, Stack, Doc } from "@/pages";
import { Endpoints } from "./pages/endpoints";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Doc />
      <Endpoints />
      <Stack />
      <Footer />
    </div>
  );
}

export default App;

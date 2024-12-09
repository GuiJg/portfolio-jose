import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

export default function Home() {
    return (
        <>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </>
    );
}
import type { AtomicProps } from "../../../types/props";
import Header from "../../organisms/header";

const BasicTemplate = ({children}: AtomicProps) => {
    return (
        <div className="w-screen h-screen flex flex-col">
            <Header />
            <main className="w-full flex flex-1 p-8 flex-col items-center gap-8">
                {children}
            </main>
        </div>
    );
};

export default BasicTemplate;

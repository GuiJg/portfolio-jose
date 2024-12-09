import './styles/Banner.css'

export default function Banner() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center">
                    <h1 className="text-8xl uppercase font-bold">josé guilherme</h1>
                    <span className="text-7xl uppercase font-bold bg-gradient-to-r from-cyan-700 to-blue-500">Dev Front-end</span>
                </div>
                {/* From Uiverse.io by mrhyddenn  */}
                <div className="scrolldown" style={{ color: "skyblue" }}>
                    <div className="chevrons">
                        <div className="chevrondown"></div>
                        <div className="chevrondown"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
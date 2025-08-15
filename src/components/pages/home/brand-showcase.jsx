import {brands} from '../../../constants';

const BrandShowcase = () => {
    return (
        <div className="w-full px-4 py-6">
            {/* Desktop grid
            <div className="hidden md:grid grid-cols-4 lg:grid-cols-6 gap-6">
                {brands.map((brand, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-center p-4 border rounded-lg bg-white shadow-sm"
                    >
                        <img
                            src={brand.src}
                            alt={brand.name}
                            className="max-h-12 w-auto object-contain"
                        />
                    </div>
                ))}
            </div>

             Mobile carousel
            <div className="md:hidden flex overflow-x-auto gap-4 no-scrollbar">
                {brands.map((brand, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 w-28 h-20 flex items-center justify-center border rounded-lg bg-white shadow-sm"
                    >
                        <img
                            src={brand.src}
                            alt={brand.name}
                            className="max-h-10 w-auto object-contain"
                        />
                    </div>
                ))}
            </div>*/}
        </div>
    );
}

export default BrandShowcase;
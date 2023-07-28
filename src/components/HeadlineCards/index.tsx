
function HeeadlineCards() {
    return (
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            <div className="rounded-xl relative ">
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">Sun's Out, Bogo's Out</p>
                    <p className="px-2">Through 8/26</p>
                    <button className="border-white bg-white mx-2 text-black absolute bottom-4">Order Now</button>
                </div>
                <img className="hover:scale-110 duration-300 max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/17182466/pexels-photo-17182466/free-photo-of-hamburguer-sanduiche-queijo-cheeseburger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
                    <p className="px-2">Added Daily</p>
                    <button className="border-white bg-white mx-2 text-black absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/2233351/pexels-photo-2233351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
            <div className="rounded-xl relative">
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts Too</p>
                    <p className="px-2">Tasty Treats</p>
                    <button className="border-white bg-white mx-2 text-black absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.pexels.com/photos/17178420/pexels-photo-17178420/free-photo-of-bacon-carne-bovina-coque-rosca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
        </div>
    )
}

export default HeeadlineCards;

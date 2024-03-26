
import contact from '../assets/contac.png'
const ContactCard = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 ">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Contact us</h2>
			<div className="text-gray-400">Have questions or need support? We’re here to help!</div>
		</div>
		<img src={contact} alt="" className="p-6 h-52 md:h-72 " />
	</div>
	<form  className="space-y-6">
		<div>
			<label  className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="Enter Your name" className="w-full p-3 rounded border-2" />
		</div>
		<div>
			<label  className="text-sm">Email</label>
			<input id="email" type="email" placeholder="Enter Your email" className="w-full p-3 rounded border-2" />
		</div>
		<div>
			<label  className="text-sm">Message</label>
			<textarea placeholder="Write Your Opinion" id="message" rows="3" className="w-full p-3 rounded border-2"></textarea>
		</div>
		<div className="flex justify-center">
        <a   className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-center text-gray-900 ">Send Message</a>
        </div>
	</form>
</div>
    );
};

export default ContactCard;
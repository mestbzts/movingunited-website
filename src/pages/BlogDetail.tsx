import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar } from "lucide-react";
import { useEffect } from "react";
import BigMoveImg from "@/assets/bigmove.jpg";
import Staging from "@/assets/staging.jpg";
import Move from "@/assets/move.jpg";
import relocation from "@/assets/office-relocation.jpg";
import Fragile from "@/assets/fragile.jpg";

const blogs = [
	{
		id: 0,
		title: "How to Prepare for a Big Move",
		category: "Moving Tips",
		summary: "Essential steps to make your move stress-free.",
		content: `Planning a move in Toronto or the GTA? Learn how to prepare for a big move with expert packing, organizing, and assembly tips from MovingUnited.

**1. Start Planning Early — The Key to a Stress-Free Move**
The biggest secret to a smooth move is starting early. As soon as you know your moving date, create a timeline and checklist.
Here’s a sample timeline to help you stay organized:

4–6 weeks before: Book your moving company, gather packing supplies, and notify your landlord (if renting).

2–3 weeks before: Start packing non-essential items, donate unwanted belongings, and schedule utility transfers.

1 week before: Confirm moving day details with your movers, defrost your freezer, and prepare an essentials bag.

1 day before: Disassemble furniture, label boxes, and get a good night’s rest.

Pro Tip: Summer and month-end are the busiest times to move in Toronto. Book your movers at least 4 weeks in advance to lock in your preferred date and rate.
**2. Declutter and Organize**
A big move is the perfect time to let go of what you no longer need.
Go room by room and sort items into “keep,” “donate,” and “discard” categories. You’ll save time, money, and effort by moving fewer items.

You can donate gently used furniture or clothing to organizations like:

Furniture Bank Toronto

Value Village

Habitat for Humanity ReStore

The less you move, the easier and cheaper your relocation becomes — especially for long-distance moves.
**3. Gather the Right Packing Supplies**
Using the right packing materials keeps your belongings safe during transit.
Stock up on:

Heavy-duty moving boxes

Packing tape and bubble wrap

Stretch wrap for furniture

Permanent markers for labeling

Label every box clearly with the room name and contents. For fragile items, mark “Handle with Care.”
If you’re short on time, MovingUnited offers full packing and unpacking services — saving you hours of work while ensuring your items are professionally protected.

**4. Disassemble Large Furniture Before Moving Day**
Nothing slows down a move more than bulky furniture that won’t fit through doorways.
Take apart bed frames, tables, and shelves ahead of time. Keep all screws, bolts, and small parts in labeled bags taped to the furniture piece.

If you’d rather not deal with the hassle, our assembly and disassembly team can handle everything — ensuring your furniture arrives safely and is reassembled perfectly in your new home.

**5. Pack a “First Night” Essentials Box**
After a long day of moving, the last thing you’ll want to do is dig through boxes looking for toothpaste or a phone charger.
Prepare a box or suitcase with your essentials:

Toiletries

Medications

Chargers

Pajamas and a change of clothes

Snacks and water

Towels and basic kitchenware

Keep it with you in the car instead of sending it with the movers.

**6. Take Care of Utilities and Address Changes**
Update your address and service accounts at least two weeks before your move:

Canada Post (set up mail forwarding)

Hydro and Gas Providers

Internet and Cable

Banks, insurance, and health services

Driver’s license and vehicle registration

It’s a good idea to keep copies of your last utility bills in case you need proof of address later.

**7. Protect Your Valuables and Fragile Items**
Wrap fragile items in multiple layers of bubble wrap and fill empty spaces in boxes with paper or cloth.
Transport jewelry, electronics, and important documents yourself to avoid misplacement.

For high-value items, let your movers know in advance — MovingUnited’s insured moving services cover your belongings throughout the journey for extra peace of mind.

**8. After the Move: Settle In Smoothly**
Once the boxes are in your new home, take it one step at a time.
Start by setting up essential rooms — kitchen, bathroom, and bedroom.
Unpack gradually and take breaks to explore your new neighborhood.

If you’ve moved to the GTA suburbs (like Aurora, Newmarket, or Pickering), take some time to discover local parks, restaurants, and shops. Moving is also about building new routines and making fresh memories.

**Why Toronto Residents Trust MovingUnited**

✅ Local Expertise – We know Toronto traffic, condo regulations, and building access rules.
✅ Transparent Pricing – No hidden fees, ever.
✅ Professional Equipment – Clean trucks, dollies, straps, and pads.
✅ Friendly Movers – Courteous, punctual, and experienced.
✅ Flexible Scheduling – Weekday, weekend, and evening moves available.

When you move with us, you’re not just hiring movers — you’re partnering with professionals who care.

MovingUnited – Your Move. Our Mission.`,
		images: [BigMoveImg],
		date: "March 15, 2025",
		author: "Moving United Team",
	},
	{
		id: 1,
		title: "Staging Your Home for Sale",
		category: "Staging",
		summary: "Tips to make your home irresistible to buyers.",
		content: `When it comes to selling your home, first impressions matter. A well-staged home doesn’t just look appealing — it helps potential buyers visualize themselves living there.
But what many homeowners don’t realize is that a moving company can play a major role in the home-staging process.

At MovingUnited, we go beyond moving boxes. Our Toronto-based team helps homeowners and realtors prepare, declutter, transport, and set up spaces to highlight every home’s full potential.

Here’s how working with a professional moving and assembly company can make your staging process easier, faster, and more effective.


**1. Decluttering and Preparatione**
The first rule of staging is less is more. Buyers want to see open, clean spaces — not overcrowded rooms.
Our moving professionals can help you declutter and organize by:

Packing away personal items and excess furniture

Transporting items to temporary storage

Organizing essentials so you can still live comfortably during showings

We handle your belongings carefully, labeling and packing each item securely — so when it’s time to move to your new place, everything’s ready.

**Pro Tip:** Decluttering early helps your real estate listing photos look brighter and more spacious, which attracts more potential buyers.

**2. Rearranging and Furniture Assembly**
Staging isn’t always about bringing in new furniture — often, it’s about rearranging what you already own.
Our assembly and disassembly team can safely move large pieces, rearrange rooms, and even set up rental or showroom furniture to match your staging plan.

We frequently work with real estate agents and interior stylists across the GTA to ensure every piece is positioned perfectly — highlighting the flow and size of each room.

From downtown Toronto condos to suburban homes in Vaughan or Markham, our team has experience staging all kinds of spaces.

**3. Temporary Storage and Logistics**
Don’t have space to keep your extra furniture? No problem.
We offer short-term storage options and secure transport for your items until your home sells.

When the time comes, we can move everything directly into your new home — saving you from the stress of handling multiple moves.

Our service covers the entire Greater Toronto Area, including:

Vaughan

Markham

Newmarket

Aurora

Pickering

Ajax

So whether you’re moving downtown or into the suburbs, we’ve got you covered.

**4. Handling Assembly and Repairs Before Showings**
A perfectly staged home also means everything works and looks good.
Our movers are trained in furniture assembly and light handyman work, such as:

Reassembling or tightening loose furniture

Hanging mirrors and light décor

Helping with small item installations

This added service ensures your home looks its best before the first open house.

Listing photos and video tours are often the first things buyers see — so presentation is everything.
Our team coordinates with realtors and photographers to make sure:

All furniture and décor are placed correctly

Walkways are clear

Cables, clutter, and personal items are hidden

Lighting and spacing look perfect for the camera

Once the shoot is done, we can help reset or adjust rooms as needed.**5. Preparing for Photos and Open Houses**

**💡 Why Work with a Moving Company for Staging?**

Most people think of movers as the last step — but in reality, they’re the first step toward selling success.
Here’s why working with MovingUnited can save you time and effort:

✅ End-to-End Service – From packing and storage to setup and assembly.
✅ Local Expertise – We understand Toronto’s condo layouts, narrow driveways, and suburban access.
✅ Professional Team – Friendly, insured, and efficient movers.
✅ Flexible Scheduling – We work around open houses and realtor appointments.
✅ Affordable Rates – Transparent pricing with no hidden fees.

We’re proud to support both homeowners and real estate professionals throughout the GTA.

🚚 Make Your Home Market-Ready with MovingUnited

Selling your home is a big step — and we’re here to make it smoother.
Whether you need help with decluttering, assembly, or full-scale staging logistics, our experienced movers can handle it all.

MovingUnited – Your Move. Our Mission.`,
		images: [Staging],
		date: "feb 10, 2025",
		author: "Moving United Team",
	},
	{
		id: 2,
		title: "Commercial Relocation Checklist",
		category: "Commercial",
		summary: "A checklist for a smooth office relocation.",
		content: `Moving a business requires careful planning and coordination to minimize downtime. Use this comprehensive checklist to ensure a successful commercial relocation:

**Planning Phase (3-6 Months Before)**

**1. Form a Moving Committee**
Designate team members responsible for different aspects of the move. Clear communication is essential.

**2. Set a Budget**
Account for moving costs, new furniture, IT setup, and potential downtime. Include a contingency fund.

**3. Choose a Move Date**
Select a date that minimizes business disruption. Weekend or after-hours moves are often ideal.

**4. Hire Professional Movers**
Choose experienced commercial movers who understand business needs and can work within your timeline.

**Pre-Move Phase (1-3 Months Before)**

**5. Create a Floor Plan**
Design the new office layout before moving. This ensures furniture and equipment go directly to their final locations.

**6. Update Business Information**
Notify clients, vendors, and service providers of your new address. Update your website and marketing materials.

**7. IT Infrastructure Planning**
Coordinate with IT professionals to ensure phones, internet, and computer systems are ready on day one.

**8. Inventory Everything**
Document all equipment, furniture, and supplies. This helps track items and identify what might need replacement.

**Moving Week**

**9. Backup Important Data**
Ensure all digital information is backed up before disconnecting computers.

**10. Label Everything**
Use color-coded labels for different departments or areas to streamline unpacking.

**11. Pack Non-Essential Items First**
Start with archives, storage items, and decorative pieces. Keep daily-use items accessible until the last moment.

**Post-Move**

**12. Conduct a Walkthrough**
Check the old location to ensure nothing was left behind.

**13. Test All Systems**
Verify that phones, internet, and equipment are functioning properly.

**14. Celebrate!**
Acknowledge your team's hard work with a small celebration or team lunch.

Our commercial moving specialists can handle every aspect of your office relocation. Request a consultation today!`,
		images: [relocation],
		date: "March 5, 2024",
		author: "Moving United Team",
	},
	{
		id: 3,
		title: "Packing Guide for Fragile Items",
		category: "Packing Guide",
		summary: "How to safely pack your fragile belongings.",
		content: `Fragile items require special attention during a move. Follow these expert tips to ensure your delicate belongings arrive safely:

**Essential Packing Materials**

Before you start, gather these supplies:
- Sturdy boxes in various sizes
- Bubble wrap
- Packing paper
- Foam peanuts or padding
- Packing tape
- Markers for labeling

**General Packing Principles**

**1. Use Quality Boxes**
Never use damaged boxes for fragile items. Double-walled boxes provide extra protection.

**2. Cushion the Bottom**
Create a 2-3 inch layer of padding at the bottom of each box using bubble wrap or packing paper.

**3. Wrap Each Item Individually**
Never pack fragile items without wrapping them separately. Use several layers for valuable pieces.

**4. Fill Empty Spaces**
Prevent items from shifting by filling gaps with packing paper, bubble wrap, or foam peanuts.

**5. Don't Overpack**
Heavy boxes are more likely to be dropped. Keep fragile item boxes to a manageable weight.

**Item-Specific Tips**

**Dishes and Glassware**
- Wrap each piece individually in packing paper
- Place plates vertically (on edge) rather than stacked
- Use dividers for glasses and stemware
- Mark "FRAGILE" and "THIS SIDE UP" clearly

**Artwork and Mirrors**
- Use specialty boxes or create custom protection
- Cover glass surfaces with painter's tape in an X pattern to prevent shattering
- Wrap in bubble wrap and secure with tape
- Never lay flat—always transport upright

**Electronics**
- Use original boxes when possible
- Remove batteries and pack separately
- Wrap cords and label them
- Take photos of cable connections for easy reassembly

**Lamps and Light Fixtures**
- Remove bulbs and shades
- Wrap base and shade separately
- Fill hollow bases with packing paper for stability

**Crystal and China**
- Use extra padding
- Wrap each piece in tissue paper first, then bubble wrap
- Consider professional packing for valuable collections

**Labeling Strategy**

Clearly mark boxes containing fragile items:
- Write "FRAGILE" on all sides in large letters
- Indicate which side should face up
- Note the room destination
- List contents for valuable items

**Loading the Moving Truck**

- Place fragile boxes on top of heavier items
- Never stack other boxes on top of fragile items
- Secure boxes to prevent shifting during transport

**Consider Professional Help**

For valuable or extremely fragile items, professional packing services provide:
- Expert handling
- Insurance coverage
- Specialty packing materials
- Peace of mind

Contact us for professional packing services tailored to your needs!`,
		images: [Fragile],
		date: "February 28, 2024",
		author: "Michael Chen, Packing Specialist",
	},
	{
		id: 4,
		title: "Planning Your Move: Timeline & Checklist",
		category: "Planning",
		summary: "A step-by-step timeline for a stress-free move.",
		content: `A well-planned move is a successful move. Follow this comprehensive timeline to stay organized and reduce stress:

**8 Weeks Before Moving Day**

**Week 8: Initial Planning**
- Set your moving date
- Research and get quotes from moving companies
- Start decluttering—donate or sell items you don't need
- Create a moving binder to organize documents and receipts
- Begin researching your new neighborhood

**Week 7: Budgeting and Booking**
- Compare moving quotes and book your movers
- Start tracking moving expenses
- Research storage options if needed
- Begin using up perishable food items

**6 Weeks Before**

**Week 6: Administrative Tasks**
- Notify your landlord (if renting)
- Research schools in your new area (if applicable)
- Start gathering packing supplies
- Take measurements of your new home
- Plan your new home's layout

**Week 5: More Decluttering**
- Continue sorting through belongings
- Hold a garage sale or donate items
- Cancel or transfer memberships and subscriptions
- Research utility providers at your new location

**4 Weeks Before**

**Week 4: Address Changes**
- Submit change of address to USPS
- Notify banks, credit card companies, and insurance providers
- Update voter registration
- Inform your employer
- Notify your children's schools

**Week 3: Utilities and Services**
- Schedule utility disconnection/connection dates
- Arrange for cable/internet installation
- Transfer medical records and prescriptions
- Notify your doctor, dentist, and other healthcare providers

**2 Weeks Before**

**Week 2: Serious Packing**
- Start packing non-essential items
- Label all boxes with contents and destination room
- Keep an inventory list
- Confirm moving company details
- Arrange for pet care on moving day
- Plan meals using pantry items

**1 Week Before**

**Week 1: Final Preparations**
- Pack suitcases with essentials for the first week
- Defrost and clean refrigerator/freezer
- Drain garden hoses and lawn equipment
- Return borrowed items
- Confirm arrangements with movers
- Clean out safety deposit box
- Pack a "first night" box with essentials

**Moving Week**

**3 Days Before**
- Finish packing all non-essential items
- Disassemble furniture
- Drain washing machine hose
- Disconnect appliances

**2 Days Before**
- Pack remaining items except daily essentials
- Reconfirm arrival time with movers
- Clean out refrigerator
- Get cash for tips

**1 Day Before**
- Pack remaining items
- Set aside items to go in your car
- Charge phone and devices
- Get a good night's sleep

**Moving Day**

**Morning**
- Do a final walkthrough
- Check all closets, drawers, and cabinets
- Take meter readings
- Meet with movers and review inventory

**During the Move**
- Keep important documents with you
- Oversee loading process
- Do a final check of the entire property

**After Movers Leave**
- Check that nothing was left behind
- Take photos of the empty space
- Turn off lights and lock up
- Turn in keys

**First Week in New Home**

**Day 1**
- Direct movers on furniture placement
- Check for damage during unloading
- Locate shut-off valves and circuit breaker
- Set up beds
- Unpack essential items

**Week 1**
- Unpack room by room
- Update your driver's license
- Register your vehicle
- Find new doctors, dentist, etc.
- Locate nearest grocery store, pharmacy, etc.
- Introduce yourself to neighbors
- Test smoke detectors and replace batteries

**Final Tasks**

- Register to vote in new location
- Find new service providers (hairdresser, mechanic, etc.)
- Explore your new community
- Join local groups or organizations
- Properly dispose of packing materials

**Pro Tips for Success**

1. **Stay Organized**: Use your moving binder to keep all documents, receipts, and checklists in one place.

2. **Pack Smart**: Label boxes clearly and create a master inventory list.

3. **Take Photos**: Document furniture arrangement in your old home and any pre-existing damage in your new home.

4. **Keep Essentials Handy**: Pack a bag with items you'll need immediately, like toiletries, medications, phone chargers, and a change of clothes.

5. **Communicate**: Keep in regular contact with your moving company and anyone else involved in the process.

6. **Be Flexible**: Despite the best planning, unexpected issues may arise. Stay calm and adapt as needed.

**Remember**: Moving doesn't have to be stressful. With proper planning and the right moving company, you can enjoy a smooth transition to your new home.

Ready to start planning your move? Contact Moving United today for a free consultation and quote. Our expert team will guide you through every step of the process!`,
		images: [Move],
		date: "January 23, 2025",
		author: "Moving United Team",
	},
];

const BlogDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	// normalize id: accept either "0" or "Blog0"
	const normalizedId = id ? (id.startsWith("Blog") ? id.replace(/^Blog/, "") : id) : "";
	const blog = blogs.find((b) => String(b.id) === normalizedId);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!blog) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
					<Button onClick={() => navigate("/blog")}>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Blog
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-8">
				<div className="container mx-auto px-4">
					<Button
						variant="ghost"
						onClick={() => navigate("/blog")}
						className="mb-4 text-primary-foreground hover:bg-primary-foreground/10"
					>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to Blog
					</Button>
					<Badge className="mb-4">{blog.category}</Badge>
					<h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
					<div className="flex items-center gap-4 text-sm">
						<div className="flex items-center gap-2">
							<Calendar className="h-4 w-4" />
							{blog.date}
						</div>
						<span>•</span>
						<span>{blog.author}</span>
					</div>
				</div>
			</div>

			{/* Content */}
			<article className="container mx-auto px-4 py-12 max-w-4xl">
				{/* Featured Image */}
				{blog.images && blog.images[0] && (
					<img
						src={blog.images[0]}
						alt={blog.title}
						className="w-full h-[400px] object-cover rounded-lg mb-8 shadow-lg"
					/>
				)}

				{/* Blog Content */}
				<div className="prose prose-lg max-w-none">
					{blog.content.split("\n\n").map((paragraph, index) => {
						// Check if paragraph is a heading (starts with **)
						if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
							const text = paragraph.replace(/\*\*/g, "");
							return (
								<h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
									{text}
								</h2>
							);
						}
						// Regular paragraph
						return (
							<p key={index} className="mb-4 text-muted-foreground leading-relaxed">
								{paragraph.split("\n").map((line, i) => (
									<span key={i}>
										{line.startsWith("**") && line.endsWith("**") ? (
											<strong className="text-foreground">{line.replace(/\*\*/g, "")}</strong>
										) : (
											line
										)}
										{i < paragraph.split("\n").length - 1 && <br />}
									</span>
								))}
							</p>
						);
					})}
				</div>

				{/* Additional Images */}
				{blog.images && blog.images.length > 1 && (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
						{blog.images.slice(1).map((image, index) => (
							<img
								key={index}
								src={image}
								alt={`${blog.title} ${index + 2}`}
								className="w-full h-64 object-cover rounded-lg shadow"
							/>
						))}
					</div>
				)}

				{/* CTA Section */}
				<div className="mt-12 p-8 bg-muted rounded-lg text-center">
					<h3 className="text-2xl font-bold mb-4">Need Moving Help?</h3>
					<p className="text-muted-foreground mb-6">
						Our professional team is ready to make your move stress-free
					</p>
					<Button size="lg" onClick={() => navigate("/contact")}>
						Get a Free Quote
					</Button>
				</div>

				{/* Back Button */}
				<div className="mt-8 text-center">
					<Button variant="outline" onClick={() => navigate("/blog")}>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Back to All Posts
					</Button>
				</div>
			</article>
		</div>
	);
};

export default BlogDetail;
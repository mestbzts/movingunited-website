// Service area pages. Edit the text here; pages, links and sitemap follow automatically.
export type Area = {
  slug: string;
  name: string;
  summary: string;
  intro: string;
  tips: { title: string; text: string }[];
  nearby: string[];
  recentWork?: string[];
};

export const areas: Area[] = [
  {
    slug: "toronto",
    name: "Toronto",
    summary: "Condo, house and business moves across the city, from downtown towers to residential side streets.",
    intro: "Moving in Toronto often comes down to access: elevators, loading docks and curb space. Moving United helps households and businesses plan those details along with the move itself.",
    tips: [
      { title: "Book the service elevator", text: "Condo and apartment buildings commonly set moving windows. Ask your property manager for the booking rules, any deposit and any insurance paperwork." },
      { title: "Plan where the truck will stop", text: "Check whether your building has a loading dock and its height limit. On streets without one, find out what parking arrangements apply." },
      { title: "Allow for traffic", text: "Downtown moves can be affected by rush hour, road work and events, so share your timing limits when you ask for a quote." },
    ],
    nearby: ["north-york", "scarborough", "mississauga", "vaughan"],
    recentWork: ["TIFF VIP Lounge staging (September 2025)", "Metro Toronto Convention Centre delivery and setup (April 2025)", "Physiotherapy centre relocation (December 2024)"],
  },
  {
    slug: "north-york",
    name: "North York",
    summary: "Help with high-rise moves along busy corridors and larger house moves in established neighbourhoods.",
    intro: "North York ranges from high-rise living around Yonge Street to detached homes in areas such as Willowdale and Don Mills. We tailor the crew and plan to the kind of property you are leaving and the one you are moving into.",
    tips: [
      { title: "Tell us both building types", text: "A move from a tower to a house needs different timing and equipment than a house-to-house move." },
      { title: "List large furniture early", text: "Note wardrobes, sectionals and dining sets that may need to be taken apart to get through doors or into an elevator." },
      { title: "Protect floors and finishes", text: "Point out delicate floors, railings or walls before the move starts so they can be covered." },
    ],
    nearby: ["toronto", "scarborough", "vaughan", "markham"],
    recentWork: ["Luxury home move (September 2025)"],
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    summary: "Apartment, townhouse and family home moves in east Toronto.",
    intro: "From apartment towers to bungalows in neighbourhoods such as Agincourt, Guildwood and Malvern, Scarborough moves come in many sizes. Moving United can help with packing, furniture and getting items you no longer need out of the way.",
    tips: [
      { title: "Clear out before you pack", text: "Basements, garages and storage lockers add time. Ask about disposal and donation for anything you are not taking." },
      { title: "Check stairs and walkways", text: "Mention split-level layouts, narrow basement stairs or long walks from the door to the truck." },
      { title: "Reserve building access", text: "In apartment buildings, confirm the elevator and loading area with management before choosing a start time." },
    ],
    nearby: ["toronto", "north-york", "markham"],
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    summary: "City Centre condo moves, suburban house moves and office relocations.",
    intro: "Mississauga moves can mean a condo near City Centre, a family home in Meadowvale or Streetsville, or an office in one of the city's business parks. We help with both residential and commercial relocations.",
    tips: [
      { title: "Coordinate two sets of rules", text: "If you are moving between condos, match the elevator bookings at both ends before fixing the date." },
      { title: "Schedule office moves around work", text: "Ask about after-hours or weekend moving to reduce disruption to your team." },
      { title: "Label by destination room", text: "Clear labels on boxes and equipment make unloading quicker, especially in larger homes and offices." },
    ],
    nearby: ["toronto", "woodbridge", "orangeville"],
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    summary: "Moves for new condos, family homes and businesses across Vaughan.",
    intro: "Vaughan includes new towers around the Vaughan Metropolitan Centre, communities such as Maple and Thornhill, and busy commercial areas such as Concord. Moving United plans each job around the property and your schedule.",
    tips: [
      { title: "Ask about new-building access", text: "Newly occupied buildings can have limited elevator slots during move-in periods, so book early." },
      { title: "Confirm your closing day", text: "If keys depend on a real estate closing, tell us so the plan can allow for a later handover." },
      { title: "Separate business equipment", text: "For commercial moves, list IT equipment, files and heavy items in advance." },
    ],
    nearby: ["woodbridge", "kleinburg", "richmond-hill", "north-york"],
  },
  {
    slug: "woodbridge",
    name: "Woodbridge",
    summary: "House and townhouse moves in west Vaughan, including furniture assembly.",
    intro: "Woodbridge combines established streets near Market Lane with newer family subdivisions. Moving United helps move full households, including furniture that needs to be taken apart and put back together.",
    tips: [
      { title: "Walk through the whole house", text: "Include the basement, garage, patio and shed in your item list so the estimate reflects everything." },
      { title: "Flag oversized pieces", text: "Large dining tables, cabinets and exercise equipment may need extra hands or disassembly." },
      { title: "Plan driveway space", text: "Keep the driveway clear and tell neighbours if the truck may need room on the street." },
    ],
    nearby: ["vaughan", "kleinburg", "mississauga"],
  },
  {
    slug: "kleinburg",
    name: "Kleinburg",
    summary: "Careful moves for homes in and around Kleinburg village.",
    intro: "Kleinburg's village setting and surrounding residential streets call for planning around truck access, large furnishings and valuable pieces. Share the details of your property and we will plan the move around them.",
    tips: [
      { title: "Identify valuable items", text: "Tell us about artwork, antiques and fragile furniture so they can be wrapped and placed with care." },
      { title: "Describe the approach", text: "Mention long or sloped driveways, gates and landscaping that affect where a truck can park." },
      { title: "Consider staging", text: "If you are selling first, ask about staging help before your listing goes live." },
    ],
    nearby: ["woodbridge", "vaughan", "orangeville"],
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    summary: "Family home, townhouse and office moves in central York Region.",
    intro: "Whether you are near Yonge Street, in Bayview Hill or up toward Oak Ridges, Moving United can help move your home or business in Richmond Hill, with packing and furniture assembly when you need it.",
    tips: [
      { title: "Decide who packs", text: "Tell us whether you want full packing, help with fragile items only, or transport of boxes you packed." },
      { title: "Measure the new space", text: "Check doorways and stairwells at your new address before moving large furniture." },
      { title: "Keep essentials with you", text: "Set aside documents, medication and chargers so they do not go on the truck." },
    ],
    nearby: ["markham", "vaughan", "aurora", "stouffville"],
  },
  {
    slug: "markham",
    name: "Markham",
    summary: "Home moves from Unionville to Cornell, and relocations for Markham offices.",
    intro: "Markham has heritage streets in Unionville, newer neighbourhoods such as Cornell and a large business community. Moving United handles household moves and office relocations.",
    tips: [
      { title: "Check older doorways", text: "Heritage homes can have tighter entries and stairs, so note any large pieces that may need disassembly." },
      { title: "Ask about laneway access", text: "Where garages face a rear lane, decide in advance whether loading will be from the front or back." },
      { title: "Map your new office", text: "A simple floor plan showing desks and equipment helps everything land in the right place." },
    ],
    nearby: ["richmond-hill", "stouffville", "scarborough", "north-york"],
  },
  {
    slug: "stouffville",
    name: "Stouffville",
    summary: "Moves in town and in the surrounding communities of Whitchurch-Stouffville.",
    intro: "Moving United helps households and businesses in Stouffville and nearby communities such as Ballantrae, for both local moves and moves into other parts of the region.",
    tips: [
      { title: "Say if you are rural", text: "Share details about gravel lanes, outbuildings and the distance from the house to where a truck can park." },
      { title: "Plan ahead if you are downsizing", text: "Decide early what is going, what is being donated and what needs disposal." },
      { title: "Give us both addresses", text: "Travel between the two homes affects timing, so include them in your quote request." },
    ],
    nearby: ["markham", "uxbridge", "aurora", "richmond-hill"],
  },
  {
    slug: "aurora",
    name: "Aurora",
    summary: "Residential and small business moves in Aurora.",
    intro: "From homes near the historic Yonge Street core to newer subdivisions, Moving United helps Aurora residents and businesses move with a plan that covers packing, furniture and timing.",
    tips: [
      { title: "Book around month-end", text: "Month-end and summer dates tend to be busy, so ask for your preferred day early." },
      { title: "Check curb access downtown", text: "If you are moving near the Yonge Street core, work out where the truck can stop to load." },
      { title: "Plan reassembly", text: "List beds and other furniture you want set up the same day." },
    ],
    nearby: ["newmarket", "richmond-hill", "stouffville"],
  },
  {
    slug: "newmarket",
    name: "Newmarket",
    summary: "House, apartment and business moves in Newmarket.",
    intro: "Moving United helps with moves in Newmarket, from places near the historic Main Street to family homes across town, as well as longer moves to or from Toronto and York Region.",
    tips: [
      { title: "Set priorities for unloading", text: "Tell us which rooms need to be usable first, such as bedrooms and the kitchen." },
      { title: "Declutter room by room", text: "Moving fewer items saves time. Ask about disposal for furniture you are leaving behind." },
      { title: "Confirm parking", text: "Apartment and downtown addresses may need a reserved loading spot." },
    ],
    nearby: ["aurora", "uxbridge", "stouffville"],
  },
  {
    slug: "uxbridge",
    name: "Uxbridge",
    summary: "Moves for homes in town and rural properties around Uxbridge.",
    intro: "An Uxbridge move may involve a house in town or a rural property with a barn, workshop or long driveway. Describe what you have and Moving United will plan the loading around it.",
    tips: [
      { title: "Inventory outbuildings", text: "Tools, machinery and outdoor equipment are easy to leave off a list, so include them." },
      { title: "Think about ground conditions", text: "Snow, mud or soft shoulders can change where a truck can safely park." },
      { title: "Allow travel time", text: "For moves to or from the city, an earlier start leaves more room for unloading." },
    ],
    nearby: ["stouffville", "newmarket", "markham"],
  },
  {
    slug: "orangeville",
    name: "Orangeville",
    summary: "Local moves and moves between Orangeville and the Toronto area.",
    intro: "Moving United serves Orangeville households and businesses, including moves between Orangeville and communities closer to Toronto.",
    tips: [
      { title: "Build in the drive", text: "A move to or from the Toronto area includes meaningful travel time, so share both addresses for an accurate estimate." },
      { title: "Watch the winter forecast", text: "In colder months, clear and salt walkways before the crew arrives." },
      { title: "Pack for the journey", text: "Cushion fragile items well and seal boxes fully before a longer trip." },
    ],
    nearby: ["kleinburg", "woodbridge", "mississauga"],
  },
];

export const getArea = (slug?: string) => areas.find((a) => a.slug === slug?.toLowerCase());

// This file contains static seed data for trains
// It will be imported in the seed script to populate MongoDB, node seed.js using this cmd when new data is added

const trainData = [
  {
    train_id: "12345",
    train_route: "Delhi - Mumbai Central",
    fault_locations: ["Near Kota Junction", "Before Vadodara Station", "Approaching Surat"],
    crack_descriptions: [
      "Crack of approx. 2cm length on rail joint",
      "Rusting observed around crack perimeter",
      "Crack near welding joint shows stress concentration",
      "Multiple hairline fractures detected in vicinity",
      "Depth measurement requires ultrasonic testing"
    ],
    media_links: {
      images: [
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"
      ],
      videos: ["https://www.w3schools.com/html/mov_bbb.mp4"]
    },
    priority: "High",
    status: "Under Process"
  },
  {
    train_id: "67890",
    train_route: "Chennai Central - Bangalore City",
    fault_locations: ["Near Arakkonam Junction"],
    crack_descriptions: [
      "Surface scratch only, no structural damage",
      "Minor wear pattern observed",
      "Regular maintenance required",
      "No immediate safety concerns"
    ],
    media_links: {
      images: ["https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400"],
      videos: []
    },
    priority: "Low",
    status: "Not Started"
  },
  {
    train_id: "13579",
    train_route: "Kolkata - New Delhi",
    fault_locations: ["Approaching Kanpur Central", "Near Allahabad Junction"],
    crack_descriptions: [
      "Medium-priority crack in rail head",
      "Length approximately 1.5cm",
      "No immediate danger to operations",
      "Scheduled for next maintenance cycle"
    ],
    media_links: {
      images: ["https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400"],
      videos: []
    },
    priority: "Medium",
    status: "Under Process"
  },
  {
    train_id: "24680",
    train_route: "Mumbai Central - Ahmedabad",
    fault_locations: ["Surat Station Approach"],
    crack_descriptions: [
      "Hairline crack successfully repaired",
      "Quality assurance completed",
      "Track certified for normal operations"
    ],
    media_links: {
      images: ["https://images.unsplash.com/photo-1602490036506-2fa9b3899e5e?w=400"],
      videos: []
    },
    priority: "Medium",
    status: "Solved"
  },
  {
    train_id: "11223",
    train_route: "Hyderabad - Secunderabad",
    fault_locations: ["Begumpet Junction"],
    crack_descriptions: [
      "Severe rust accumulation near track joint",
      "Bolt loosening observed",
      "Immediate welding required"
    ],
    media_links: {
      images: ["https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=400"],
      videos: []
    },
    priority: "High",
    status: "Under Process"
  },
  {
    train_id: "33445",
    train_route: "Pune - Nagpur Express",
    fault_locations: ["Wardha Junction", "Amravati Section"],
    crack_descriptions: [
      "Multiple small cracks forming cluster",
      "Signs of fatigue damage",
      "Monitoring required every 24 hours"
    ],
    media_links: {
      images: ["https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400"],
      videos: []
    },
    priority: "High",
    status: "Not Started"
  },
  {
    train_id: "55667",
    train_route: "Lucknow - Varanasi",
    fault_locations: ["Near Sultanpur"],
    crack_descriptions: [
      "Track misalignment detected",
      "Visible surface abrasion",
      "Slight uneven track gauge observed"
    ],
    media_links: {
      images: ["https://images.unsplash.com/photo-1617957741649-d54199a9abf4?w=400"],
      videos: []
    },
    priority: "Medium",
    status: "Under Process"
  },
  {
    train_id: "77889",
    train_route: "Jaipur - Udaipur",
    fault_locations: ["Ajmer Section"],
    crack_descriptions: [
      "Surface level scratch, not critical",
      "No crack propagation detected"
    ],
    media_links: {
      images: ["https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?w=400"],
      videos: []
    },
    priority: "Low",
    status: "Solved"
  },
  {
    train_id: "99001",
    train_route: "Delhi - Chandigarh",
    fault_locations: ["Karnal Section", "Ambala Junction"],
    crack_descriptions: [
      "Deep crack near fishplate joint",
      "Track loosening risk high",
      "Immediate maintenance required"
    ],
    media_links: {
      images: ["https://images.unsplash.com/photo-1602351447937-745cb0cfc9f9?w=400"],
      videos: ["https://www.w3schools.com/html/mov_bbb.mp4"]
    },
    priority: "High",
    status: "Under Process"
  },
  {
    train_id: "54321",
    train_route: "Delhi - Amritsar",
    fault_locations: ["Jalandhar Section", "Near Ludhiana"],
    crack_descriptions: [
      "Welding joint corrosion",
      "Track bending observed under load",
      "Crack spreading towards rail head"
    ],
    media_links: {
      images: ["https://images.unsplash.com/photo-1616330979349-5d8c8d9a8a6e?w=400"],
      videos: []
    },
    priority: "High",
    status: "Not Started"
  }
];

export default trainData;

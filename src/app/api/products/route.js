export async function GET() {
  return new Response(JSON.stringify([
    {
      "id": 1,
      "name": "Sunrise Inn",
      "description": "Cozy hotel offering warm ambience and beautiful sunrise views.",
      "roomsAvailable": ["2 seater", "3 seater", "suite"],
      "bedrooms": 1,
      "price": 120,
      "rating": 4.5,
      "free_cancel": true,
      "city": "San Francisco",
      "image": [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Breakfast", "Parking"]
    },
    {
      "id": 2,
      "name": "Cityscape Hotel",
      "description": "Modern urban hotel located in the heart of the city with premium services.",
      "roomsAvailable": ["2 seater", "3 seater", "deluxe suite"],
      "bedrooms": 2,
      "price": 180,
      "rating": 4.7,
      "free_cancel": true,
      "city": "New York",
      "image": [
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Gym", "Room Service"]
    },
    {
      "id": 3,
      "name": "Lakeside Retreat",
      "description": "Serene getaway by the lake offering comfortable stay and scenic views.",
      "roomsAvailable": ["2 seater", "family suite"],
      "bedrooms": 2,
      "price": 150,
      "rating": 4.3,
      "free_cancel": false,
      "city": "Minneapolis",
      "image": [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Breakfast", "Boat Rental"]
    },
    {
      "id": 4,
      "name": "Mountainview Lodge",
      "description": "Rustic lodge with modern comforts, nestled in the mountains.",
      "roomsAvailable": ["2 seater", "3 seater", "suite"],
      "bedrooms": 1,
      "price": 130,
      "rating": 4.6,
      "free_cancel": true,
      "city": "Denver",
      "image": [
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Hiking Trails", "Parking"]
    },
    {
      "id": 5,
      "name": "Beachfront Paradise",
      "description": "Enjoy the ultimate beach escape with luxury rooms and ocean views.",
      "roomsAvailable": ["2 seater", "3 seater", "ocean view suite"],
      "bedrooms": 2,
      "price": 220,
      "rating": 4.8,
      "free_cancel": false,
      "city": "Miami",
      "image": [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559599238-1fc447d1d94e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Pool", "Breakfast"]
    },
    {
      "id": 6,
      "name": "Historic Haven",
      "description": "Experience charm and history in this beautifully restored hotel.",
      "roomsAvailable": ["2 seater", "deluxe suite"],
      "bedrooms": 1,
      "price": 140,
      "rating": 4.4,
      "free_cancel": true,
      "city": "Philadelphia",
      "image": [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Breakfast", "Guided Tours"]
    },
    {
      "id": 7,
      "name": "Urban Boutique",
      "description": "Stylish boutique hotel with personalized service and contemporary design.",
      "roomsAvailable": ["2 seater", "3 seater", "presidential suite"],
      "bedrooms": 2,
      "price": 200,
      "rating": 4.9,
      "free_cancel": true,
      "city": "Chicago",
      "image": [
        "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Fitness Center", "Bar"]
    },
    {
      "id": 8,
      "name": "Countryside Escape",
      "description": "Relax in a tranquil setting with spacious rooms and rustic charm.",
      "roomsAvailable": ["2 seater", "family suite"],
      "bedrooms": 3,
      "price": 160,
      "rating": 4.2,
      "free_cancel": true,
      "city": "Nashville",
      "image": [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Breakfast", "Garden"]
    },
    {
      "id": 9,
      "name": "Luxury Loft",
      "description": "Upscale hotel featuring designer rooms and top-notch amenities in an urban environment.",
      "roomsAvailable": ["2 seater", "3 seater", "loft suite"],
      "bedrooms": 1,
      "price": 250,
      "rating": 5.0,
      "free_cancel": true,
      "city": "Los Angeles",
      "image": [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Spa", "Concierge"]
    },
    {
      "id": 10,
      "name": "Seaside Resort",
      "description": "Relax by the sea with comfortable rooms and a range of resort activities.",
      "roomsAvailable": ["2 seater", "3 seater", "villa suite"],
      "bedrooms": 2,
      "price": 190,
      "rating": 4.6,
      "free_cancel": true,
      "city": "San Diego",
      "image": [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559599238-1fc447d1d94e?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Pool", "Beach Access"]
    },
    {
      "id": 11,
      "name": "Forest Glade Inn",
      "description": "A peaceful inn surrounded by forest views and fresh air.",
      "roomsAvailable": ["2 seater", "family suite"],
      "bedrooms": 2,
      "price": 135,
      "rating": 4.1,
      "free_cancel": true,
      "city": "Portland",
      "image": [
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Breakfast", "Nature Walks"]
    },
    {
      "id": 12,
      "name": "Skyline Suites",
      "description": "Modern suites with skyline views and urban comfort.",
      "roomsAvailable": ["2 seater", "sky suite"],
      "bedrooms": 1,
      "price": 210,
      "rating": 4.6,
      "free_cancel": false,
      "city": "Seattle",
      "image": [
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506862ae3?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Fitness Center", "Rooftop Lounge"]
    },
    {
      "id": 13,
      "name": "Riverside Inn",
      "description": "Charming inn beside the river with cozy accommodations.",
      "roomsAvailable": ["2 seater", "3 seater"],
      "bedrooms": 1,
      "price": 110,
      "rating": 4.2,
      "free_cancel": true,
      "city": "Austin",
      "image": [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Parking", "Breakfast"]
    },
    {
      "id": 14,
      "name": "The Grand Plaza",
      "description": "Luxurious downtown hotel with grand interiors and first-class service.",
      "roomsAvailable": ["3 seater", "deluxe suite"],
      "bedrooms": 3,
      "price": 300,
      "rating": 4.9,
      "free_cancel": false,
      "city": "Las Vegas",
      "image": [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Casino", "Spa"]
    },
    {
      "id": 15,
      "name": "Island Breeze Resort",
      "description": "Relaxing island resort offering ocean breezes and tropical experiences.",
      "roomsAvailable": ["2 seater", "beach suite"],
      "bedrooms": 2,
      "price": 240,
      "rating": 4.8,
      "free_cancel": true,
      "city": "Honolulu",
      "image": [
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559599238-1fc447d1d94e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Pool", "Breakfast"]
    },
    {
      "id": 16,
      "name": "City Central Inn",
      "description": "Convenient and comfortable stay located in the city center.",
      "roomsAvailable": ["2 seater", "3 seater"],
      "bedrooms": 1,
      "price": 115,
      "rating": 4.0,
      "free_cancel": true,
      "city": "Atlanta",
      "image": [
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506862ae3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Room Service", "Parking"]
    },
    {
      "id": 17,
      "name": "Snowpeak Lodge",
      "description": "Winter lodge ideal for skiing and mountain retreats.",
      "roomsAvailable": ["2 seater", "ski suite"],
      "bedrooms": 2,
      "price": 180,
      "rating": 4.5,
      "free_cancel": false,
      "city": "Salt Lake City",
      "image": [
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Fireplace", "Ski Rental"]
    },
    {
      "id": 18,
      "name": "Desert Mirage Inn",
      "description": "A luxurious stay in the heart of the desert.",
      "roomsAvailable": ["3 seater", "mirage suite"],
      "bedrooms": 3,
      "price": 230,
      "rating": 4.6,
      "free_cancel": true,
      "city": "Phoenix",
      "image": [
        "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1471919743851-c4df8b6ee071?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Pool", "Desert Tours"]
    },
    {
      "id": 19,
      "name": "Harbour View Hotel",
      "description": "Beautiful hotel with views of the harbour and nearby attractions.",
      "roomsAvailable": ["2 seater", "suite"],
      "bedrooms": 1,
      "price": 175,
      "rating": 4.4,
      "free_cancel": true,
      "city": "Boston",
      "image": [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506862ae3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Restaurant", "Parking"]
    },
    {
      "id": 20,
      "name": "Meadowview Resort",
      "description": "Stay close to nature with this picturesque countryside resort.",
      "roomsAvailable": ["2 seater", "cabin suite"],
      "bedrooms": 2,
      "price": 155,
      "rating": 4.3,
      "free_cancel": true,
      "city": "Boise",
      "image": [
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop"
      ],
      "amenities": ["WiFi", "Breakfast", "Nature Trails"]
    }
  ]), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
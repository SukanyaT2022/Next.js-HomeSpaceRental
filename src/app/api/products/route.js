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
      "image": "/Images/cat7.jpg",
      // "sampleImage": "https://via.placeholder.com/150",
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
      "sampleImage": "https://via.placeholder.com/150",
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
      "sampleImage": "https://via.placeholder.com/150",
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
      "sampleImage": "https://via.placeholder.com/150",
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
      "sampleImage": "https://via.placeholder.com/150",
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
      "sampleImage": "https://via.placeholder.com/150",
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
      "sampleImage": "https://via.placeholder.com/150",
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
      "sampleImage": "https://via.placeholder.com/150",
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
      "sampleImage": "https://via.placeholder.com/150",
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
      "sampleImage": "https://via.placeholder.com/150",
      "amenities": ["WiFi", "Pool", "Beach Access"]
    }
  ]
  ), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
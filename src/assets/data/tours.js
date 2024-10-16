

const tours = [
  {
    "key": 1,
    "name": "Eiffel Tower",
    "city": "Paris",
    "country": "France",
    "description": "A global cultural icon of France and one of the most recognizable structures in the world.",
    "image": "https://img.freepik.com/free-photo/vertical-shot-beautiful-eiffel-tower-captured-paris-france_181624-45445.jpg?t=st=1726219007~exp=1726222607~hmac=a842c6185726b836512a5832afd8d85c943f0f0e61f4eb650d8d93a9028ff64c&w=360",
    "capacity": "5000",
    "landscape": "Iconic",
    "Open_from": "2024/01/01",
    "Open_to": "2024/12/31"
  },
  {
    "key": 2,
    "name": "Mount Everest Base Camp",
    "city": "Solukhumbu",
    "country": "Nepal",
    "description": "A famous trek offering spectacular views of the highest peak in the world.",
    "image": "https://img.freepik.com/free-photo/wide-shot-house-isolated-mountains-covered-by-snow-capanna-cadlino_181624-4648.jpg?t=st=1726219346~exp=1726222946~hmac=086c634b643329e0863f1abaf21ef093a215857b3f9e6d9544451fb1f377dc0e&w=996",
    "capacity": "10",
    "landscape": "Mountain",
    "Open_from": "2024/03/01",
    "Open_to": "2024/10/01"
  },
  {
    "key": 3,
    "name": "Sydney Opera House",
    "city": "Sydney",
    "country": "Australia",
    "description": "An iconic performing arts center and architectural marvel in Sydney.",
    "image": "https://img.freepik.com/free-photo/beautiful-shot-sydney-harbor-bridge-with-light-pink-blue-sky_181624-16041.jpg?t=st=1726220149~exp=1726223749~hmac=2b2100d9877d95508b5fbb2ba8b9d58838a1606ceeb290454d33c6acb4101bcb&w=996",
    "capacity": "1000",
    "landscape": "Iconic",
    "Open_from": "2024/01/01",
    "Open_to": "2024/12/31"
  },
  {
    "key": 4,
    "name": "Grand Canyon National Park",
    "city": "Arizona",
    "country": "United States",
    "description": "Famous for its layered bands of red rock, this canyon offers breathtaking hiking experiences.",
    "image": "https://img.freepik.com/free-photo/beautiful-scenery-rocky-cliffs-zions-national-park-sunset_181624-28967.jpg?t=st=1726220246~exp=1726223846~hmac=18a72545f9140f6eb2d51bbc04652fc920d0a649831b3e60467ae0f655fe4a8d&w=740",
    "capacity": "3000",
    "landscape": "Iconic",
    "Open_from": "2024/01/01",
    "Open_to": "2024/10/01"

  },
  {
    "key": 5,
    "name": "Santorini Beaches",
    "city": "Santorini",
    "country": "Greece",
    "description": "Beautiful beaches with white sand and clear blue waters.",
    "image": "https://img.freepik.com/free-photo/vertical-high-angle-shot-white-buildings-santorini-greece_181624-31643.jpg?t=st=1726220342~exp=1726223942~hmac=df476a7a9a55badc0a83479c2ece9893478b0275dc5c8ac860d7eb59335e92e5&w=360",
    "capacity": "10000",
    "landscape": "Beach",
    "Open_from": "2024/01/01",
    "Open_to": "2024/12/31"
  },
  {
    "key": 6,
    "name": "Great Wall of China",
    "city": "Beijing",
    "country": "China",
    "description": "A historic fortification offering scenic walks along its stretches.",
    "image": "https://img.freepik.com/premium-photo/great-wall-china-spring-near-beijing_367038-151.jpg?w=996",
    "capacity": "7000",
    "landscape": "Iconic",
    "Open_from": "2024/01/01",
    "Open_to": "2024/12/31"
  },
  {
    "key": 7,
    "name": "Banff National Park",
    "city": "Banff",
    "country": "Canada",
    "description": "A national park in the Canadian Rockies known for its mountains and lakes.",
    "image": "https://img.freepik.com/free-photo/horizontal-view-female-tourist-enjoys-tranquil-remote-mountain-lake-view-stands-back-camera_273609-25729.jpg?t=st=1726220554~exp=1726224154~hmac=47210266d7bdf8725a45024ec84cd34283186b2a70db970e5e060ed2e4633b71&w=996",
    "capacity": "10",
    "landscape": "Mountain",
    "Open_from": "2024/01/01",
    "Open_to": "2024/10/01"


  },
  {
    "key": 8,
    "name": "Taj Mahal",
    "city": "Agra",
    "country": "India",
    "description": "A UNESCO World Heritage site and symbol of India's rich history.",
    "image": "https://img.freepik.com/premium-photo/taj-mahal-mausoleum-agra_155769-874.jpg?w=360",
    "capacity": "20000",
    "landscape": "Iconic",
    "Open_from": "2024/01/01",
    "Open_to": "2024/12/31"

  },
  {
    "key": 9,
    "name": "Swiss Alps",
    "city": "Zermatt",
    "country": "Switzerland",
    "description": "The perfect destination for hiking and skiing with stunning mountain views.",
    "image": "https://img.freepik.com/premium-photo/village-zermatt-with-matterhorn-mountain-background-sunset-switzerland_38535-368.jpg?w=740",
    "capacity": "10",
    "landscape": "Iconic",
    "Open_from": "2024/01/01/",
    "Open_to": "2024/12/31"

  },
  {
    "key": 10,
    "name": "Maasai Mara National Reserve",
    "city": "Narok",
    "country": "Kenya",
    "description": "Famous for its wildlife and the Great Migration of wildebeests.",
    "image": "https://img.freepik.com/free-photo/family-springboks-drinking-water-from-dirty-lake_181624-15645.jpg?t=st=1726220851~exp=1726224451~hmac=eb6983532de78ebbd1c515c96fff4b8cf8024df068fe42e02af1bcc250bb023b&w=996",
    "capacity": "15000",
    "landscape": "Iconic",
    "Open_from": "2024/01/01",
    "Open_to": "2024/10/01"

  },
  {
    "key": 11,
    "name": "Colosseum",
    "city": "Rome",
    "country": "Italy",
    "description": "An ancient amphitheater in the center of Rome, one of the greatest works of Roman architecture.",
    "image": "https://img.freepik.com/free-photo/vertical-shot-great-roman-coliseum-sunny-day_181624-3390.jpg?t=st=1726221052~exp=1726224652~hmac=efda8c2688bbee36bb979817207f174f212ce2ab4e6d7e6a85af5f0a11e129aa&w=360",
    "capacity": "6000",
    "landscape": "Iconic",
    "Open_from": "2024/01/01",
    "Open_to": "2024/12/31"

  },
  {
    "key": 12,
    "name": "Yellowstone National Park",
    "city": "Wyoming",
    "country": "United States",
    "description": "Home to hot springs, geysers, and diverse wildlife, perfect for hiking.",
    "image": "https://img.freepik.com/premium-photo/sandstone-outcrops-erglu-cliffs-bank-gauja-river-beautiful-autumn-landscape-with-river-forest-latvia-baltic_78048-662.jpg?w=360",
    "capacity": "10",
    "landscape": "Iconic",
    "Open_from": "2024/01/01",
    "Open_to": "2024/10/01"

  },
  {
    "key": 13,
    "name": "Machu Picchu",
    "city": "Cusco",
    "country": "Peru",
    "description": "An ancient Incan citadel located in the Andes Mountains.",
    "image": "https://img.freepik.com/free-photo/beautiful-views-incan-citadel-machu-picchu_181624-16710.jpg?t=st=1726222275~exp=1726225875~hmac=308f6cf989c3a4ae3d3614d0fa0563b5ae121289e3ae63655bf5affb1022bc73&w=1060",
    "capacity": "8000",
    "landscape": "Iconic",
    "Open_from": "2024/01/01",
    "Open_to": "2024/10/01"

  },
  {
    "key": 14,
    "name": "Bali Beaches",
    "city": "Bali",
    "country": "Indonesia",
    "description": "Stunning beaches surrounded by palm trees and clear waters, perfect for relaxation.",
    "image": "https://img.freepik.com/free-photo/travel-adventure-tourism-fashionable-barefooted-man-wearing-shorts-t-shirt-hat-meditating-seaside-standing-front-stone-island-stylish-caucasian-tourist-admiring-beautiful-view_273609-1787.jpg?t=st=1726222337~exp=1726225937~hmac=a9247905d29f0d5c0ea4058e6ca454b70bd848097aa758d4c9c49eca414d0c99&w=996",
    "capacity": "25000",
    "landscape": "Beach",
    "Open_from": "2024/01/01",
    "Open_to": "2024/12/31"

  },
  {
    "key": 15,
    "name": "Kilimanjaro Hiking Trail",
    "city": "Kilimanjaro",
    "country": "Tanzania",
    "description": "A challenging but rewarding hike to the summit of Africa's highest mountain.",
    "image": "https://img.freepik.com/free-photo/friends-mountain_119272-81.jpg?t=st=1726222468~exp=1726226068~hmac=5ca86998103980b1f55feadf0011c6d300b46f5f70a4a29eb306fddb1fafcb9d&w=826",
    "capacity": "10 ",
    "landscape": "Mountain",
    "Open_from": "2024/01/01",
    "Open_to": "2024/10/01"

  },
  {
    "key": 16,
    "name": "Niagara Falls",
    "city": "Ontario",
    "country": "Canada",
    "description": "A popular tourist destination offering boat tours close to the falls.",
    "image": "https://img.freepik.com/free-photo/american-falls-from-niagara-falls-closeup-dusk-after-sunset_649448-2082.jpg?t=st=1726222513~exp=1726226113~hmac=1bd3e008a73cc894aba5ed32ef0eb2fbcb1502381b05ce2b102bf139f68bac61&w=996",
    "capacity": "15000",
    "landscape": "Iconic",
    "Open_from": "2024/01/01",
    "Open_to": "2024/12/31"

  },
  {
    "key": 17,
    "name": "Hotel Ritz",
    "city": "Paris",
    "country": "France",
    "description": "A luxurious hotel located in the heart of Paris, offering premium services and amenities.",
    "image": "https://img.freepik.com/free-photo/swimming-pool_74190-1977.jpg?t=st=1726222561~exp=1726226161~hmac=4de792d1a046f7509a0ff587bb425193ab5b545e775bc9a189102cd976a2e6ae&w=996",
    "capacity": "10",
    "landscape": "Iconic",
    "Open_from": "2024/01/01",
    "Open_to": "2024/12/31"

  },
  {
    "key": 18,
    "name": "Bondi Beach",
    "city": "Sydney",
    "country": "Australia",
    "description": "A world-famous beach known for surfing and a lively atmosphere.",
    "image": "https://img.freepik.com/free-photo/beautiful-scenery-water-hitting-rocks-cliffs-sea_181624-4113.jpg?t=st=1726222612~exp=1726226212~hmac=668026d858a17f9a1713dc5efd4b0823da8c3f4f4fb636f1a7023c37c91d2fce&w=360",
    "capacity": "9000",
    "landscape": "Beach",
    "Open_from": "2024/01/01",
    "Open_to": "2024/12/31"

  },
  {
    "key": 19,
    "name": "Hotel Marina Bay Sands",
    "city": "Singapore",
    "country": "Singapore",
    "description": "A luxury hotel with an infinity pool that offers a stunning view of Singapore’s skyline.",
    "image": "https://www.major.travel/portal/media/images/uploads/tours/istock617882378.jpg",
    "capacity": "10",
    "landscape": "Iconic",
    "Open_from": "2024/01/01",
    "Open_to": "2024/12/31"

  },
  {
    "key": 20,
    "name": "Mount Fuji",
    "city": "Honshu",
    "country": "Japan",
    "description": "An iconic symbol of Japan, Mount Fuji offers hiking trails with breathtaking views.",
    "image": "https://img.freepik.com/free-photo/beautiful-landmark-fuji-mountain-chureito-pagoda-sunset-japan_335224-11.jpg?t=st=1726222691~exp=1726226291~hmac=7c88bdb2e0f8530f3cdd95c3c1e4bebc79b7af4cca2ad2ab11967387e98a4b35&w=996",
    "capacity": "10",
    "landscape": "Iconic",
    "Open_from": "2024/01/01",
    "Open_to": "2024/12/31"

  }
]

export default tours
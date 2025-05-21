export interface ITestimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  feedback: string;
}
const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4.8,
    feedback: "Outstanding service and fast delivery! Quality products that exceeded my expectations. Love it!",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5.0,
    feedback: "Amazing experience! They understood my needs and provided excellent stationery. Highly recommended!",
  },
  {
    id: 3,
    name: "Michael Johnson",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 4.5,
    feedback: "Great stationery and support team! The items arrived on time and exactly matched my expectations.",
  },
  {
    id: 4,
    name: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 4.7,
    feedback: "Excellent quality and fast service! The packaging was neat, and the products looked premium too.",
  },
  {
    id: 5,
    name: "David Brown",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 4.9,
    feedback: "Very professional team! Got my order ahead of time and the stationery items were top quality too.",
  },
  {
    id: 6,
    name: "Sophia Martinez",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    rating: 4.6,
    feedback: "Fantastic experience from start to finish! Helpful team and premium products at great prices too.",
  },
];

export default testimonialsData;

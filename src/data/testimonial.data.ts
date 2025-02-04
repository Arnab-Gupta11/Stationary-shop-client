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
    feedback:
      "This service exceeded my expectations! The team was incredibly responsive, and the product delivered was of top-notch quality. I highly recommend them to anyone looking for professional and reliable solutions.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5.0,
    feedback:
      "I had an amazing experience working with this team. They understood my requirements perfectly and delivered beyond what I imagined. Their attention to detail and commitment to quality are commendable!",
  },
  {
    id: 3,
    name: "Michael Johnson",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 4.5,
    feedback:
      "A truly outstanding service! The support team was always available to assist me, and the final output was nothing short of perfection. I appreciate their dedication and professionalism in every aspect.",
  },
  {
    id: 4,
    name: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 4.7,
    feedback:
      "Exceptional service and great customer support! The process was smooth, and the final result was impressive. I will definitely be using their services again in the future. Highly recommended!",
  },
  {
    id: 5,
    name: "David Brown",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 4.9,
    feedback:
      "I’m beyond satisfied with the service I received. The team was professional, skilled, and delivered my project ahead of schedule. It’s rare to find such dedication and expertise in one place!",
  },
  {
    id: 6,
    name: "Sophia Martinez",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    rating: 4.6,
    feedback:
      "The experience was fantastic! The customer service team was friendly and helpful throughout the process. The final product was exactly what I was looking for. I will definitely be recommending this to others!",
  },
];

export default testimonialsData;

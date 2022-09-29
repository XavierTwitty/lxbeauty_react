import React, { useEffect, useState } from "react";
import { useTransition, animated, config } from "react-spring";

const slides = [
  {
    id: 0,
    url: "photo-1624984675609-a08fb0404db0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  },
  {
    id: 1,
    url: "photo-1522390108011-5f8667fd551d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  },
  {
    id: 2,
    url: "photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  },
  {
    id: 3,
    url: "photo-1512413316925-fd4b93f31521?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  },
];

function Home() {
  const [index, setIndex] = useState(0);
  const transitions = useTransition(
    slides,
    // (item) => {
    //   console.log(item);
    //   return item;
    // },
    {
      from: { opacity: 0, transform: "scale(1.1)" },
      enter: { opacity: 1, transform: "scale(1)" },
      leave: { opacity: 0, transform: "scale(0.9)" },
      keys: (item) => item.id,
      config: config.molasses,
    }
    // console.log(item)
  );
  console.log(transitions);
  // useEffect(
  //   () => void setInterval(() => setIndex((state) => (state + 1) % 4), 2000),
  //   console.log(state),
  //   []
  // );

  // return transitions.map(({ item, props, key }) => (
  //   <animated.div
  //     key={key}
  //     classname="slideshow"
  //     style={{
  //       ...props,
  //       backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`,
  //     }}
  //   />
  // ));

  return <h1>hello</h1>;
}

export default Home;

// <div className="homepage">
//   <h1> The Home of Beauty </h1>

//   <section id="top">
//     <div className="sub_header">
//       <h3>Making beauty personal</h3>
//       <div className="slideshow-container">
//         <div
//           key={item}
//           className="bg"
//           style={{
//             backgroundImage: `url(${item.url})`,
//           }}
//         />
//       </div>
//     </div>
//   </section>
//   {/* sample of the services before you go to service component */}
// </div>

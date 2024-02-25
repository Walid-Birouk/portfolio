// // import React from "react";
// // import Layout from "../components/Layout";
// // import * as styles from "../styles/home.module.css";
// // import { Link, graphql } from "gatsby";
// // import { GatsbyImage, getImage } from "gatsby-plugin-image"; // Updated import

// // export default function Home({ data }) {
// //   console.log(data);
// //   // Use getImage helper to get the image data
// //   const image = getImage(data.file.childImageSharp.gatsbyImageData);

// //   return (
// //     <Layout>
// //       <section className={styles.header}>
// //         <div className="pt-5">
// //           <h1 className="text-5xl pb-5 font-bold">PORTFOLIO</h1>
// //           <h3>
// //             Aspiring{" "}
// //             <span className="typing-container">
// //               <span className="typing data-engineer">Data Engineer</span>
// //             </span>{" "}
// //             & Future{" "}
// //             <span className="typing-container">
// //               <span className="typing data-specialist">Data Specialist</span>
// //             </span>
// //           </h3>
// //           <p>
// //             Rooted in mathematics and informatics from Algeria, I'm advancing
// //             towards a degree in Artifical Intelligence at Thomas More. Dedicated
// //             and proactive, I'm at the start of a journey to impact the tech
// //             world with innovative AI solutions.
// //           </p>

// //           <Link className={styles.btn} to="/projects">
// //             My Portfolio Projects
// //           </Link>
// //         </div>
// //         <div>
// //           <GatsbyImage image={image} alt="Hero" />
// //         </div>
// //       </section>
// //     </Layout>
// //   );
// // }

// // export const query = graphql`
// //   query Banner {
// //     file(relativePath: { eq: "hero.png" }) {
// //       childImageSharp {
// //         gatsbyImageData(layout: FULL_WIDTH)
// //       }
// //     }
// //   }
// // `;

// import React from "react";
// import Layout from "../components/Layout";
// import Header from "../components/Header"; // Adjust the path as necessary
// import HeroImage from "../components/HeroImage"; // Adjust the path as necessary
// import { graphql } from "gatsby";
// import { getImage } from "gatsby-plugin-image"; // Updated import

// export default function Home({ data }) {
//   const image = getImage(data.file.childImageSharp.gatsbyImageData);

//   return (
//     <Layout>
//       <section className="header">
//         <Header />
//         <HeroImage imageData={image} />
//       </section>
//     </Layout>
//   );
// }

// export const query = graphql`
//   query Banner {
//     file(relativePath: { eq: "hero.png" }) {
//       childImageSharp {
//         gatsbyImageData(layout: FULL_WIDTH)
//       }
//     }
//   }
// `;

// index.js
import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import HeroImage from "../components/HeroImage";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  const image = getImage(data.file.childImageSharp.gatsbyImageData);

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row lg:justify-between items-center ">
        <div className="lg:w-1/2 w-full flex items-center p-5 mr-5">
          <Header />
        </div>
        <div className="lg:w-1/2 w-2/3 flex  items-center justify-center ">
          <HeroImage imageData={image} />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Hero {
    file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        gatsbyImageData(height: 666, width: 496, placeholder: BLURRED)
      }
    }
  }
`;

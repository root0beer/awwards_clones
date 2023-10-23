import React, {useRef} from "react";
import styles from "./ThreeD.module.scss";

const ThreeD = () => {
    const body = useRef(null);
    const body2 = useRef(null);
  const manageMouseMove = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const rotateX = x * 45 - 45 / 2;
    const rotateY = y * 45 - 45 / 2;
    const perspective = window.innerWidth * 5 + "px";
    body.current.style.transform = `perspective(${perspective}) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
    body2.current.style.transform = `perspective(${perspective}) rotateX(${rotateY+10}deg) rotateY(${rotateX+10}deg)`;
    console.log("x :" + x, "y: " + y);
  };

  return (
    <div onMouseMove={manageMouseMove} className={styles.container}>
      <div style={{ display: "flex", flexDirection: "row"}}>
        {/* <div className={styles.overlay}></div> */}
        <div ref={body2} className={styles.links}>
          <Text3D primary={"Mango"} secondary={"Philosophy"} />
          <Text3D primary={"Studio"} secondary={"Team"} />
          <Text3D primary={"Clothing"} secondary={"Beautiful"} />
          <Text3D primary={"Packaging"} secondary={"Sustainable"} />
          <Text3D primary={"Products"} secondary={"Useful"} />
        </div>
        <div  ref={body} className={styles.textandvid}>
          <p className={styles.textdescr}>
            Mango takes pride in our commitment to responsible craftsmanship.
            Our team of artisans and designers channel their passion for
            creativity into every product. We use sustainable materials, uphold
            ethical manufacturing practices, and create pieces that stand the
            test of time.
          </p>
          <div className={styles.videocontainer}>
            <video autoPlay loop className={styles.video}>
              <source src="working.mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.contentF}>
          <p className={styles.textfooter}>
            {" "}
            789 Broadway, Floor 4 <br />
            New York City 10012 <br />
            (+1) 254-626-4040
          </p>
          <p className={styles.textfooter}>
            New business inquires <br />
            Chloe Vadovski <br />
            chloe@mango.com
          </p>
          <p className={styles.textfooter}>
            Instagram <br />
            LinkedIn
          </p>
        </div>
        <div className={styles.logoF}>
          <p className={styles.archive}>Archive of Works</p>
        </div>
      </div>
    </div>
  );
};

const Text3D = ({ primary, secondary }) => {
  return (
    <div className={styles.textContainer}>
      <p className={styles.primary}>{primary}</p>
      <p className={styles.secondary}>{secondary}</p>
    </div>
  );
};

export default ThreeD;

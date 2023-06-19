import { Footer } from "@architecture-it/stylesystem";
import x from "./../assets/ShopMeNow.svg";


export function FooterVentas() {
  return (
    <div className="footerventas">
      <Footer
        institutional
        links={[
          {
            text: "wlacoste@outlook.com",
          },
          {
            text: "walterlacoste.dev",
          },
        ]}
        logoImgProps={{
          alt: "Norlog logo",
          src: x,
          width: "155px",
        }}
        name="Norlog"
      />
    </div>
  );
}

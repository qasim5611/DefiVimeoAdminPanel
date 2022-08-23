import MarketPlace from "./marketplace/nftmarket";
import Information from "./information/information";
import Presale from "./presale/presale";
import Blog from "./blog/blog";
import Roadmap from "./roadmap/roadmap";
import RagDollCatNFT from "./RagDollCatNFT/RagDollCatNFT";
import PublicPreSale from "./publicPreSale/PublicPreSale";
import OurDocuments from "./OurDocuments/OurDocuments";
import About from "./About/About";
import Partnership from "./Partnership/Partnership";
import Team from "./Team/Team";
import Tokenomics from "./Tokenomics/Tokenomics";
import Home from "./HomeComponent/HomeComponent";
import TableBox from "./table/table";
import Tax from "./information/tax";

export default ({ setloading, setopen }) => {
  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="NFT Marketplace">
        <MarketPlace />
      </div>
      <div id="rogdollcatnft">
        <RagDollCatNFT />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Tokenomics">
        <Tokenomics />
      </div>
      <div id="Token Info">
        <Information />
      </div>
      <div id="Tax">
        <Tax />
      </div>
      <TableBox />
      <div id="Private Presale">
        <Presale setloading={setloading} setopen={setopen} />
      </div>
      <div id="Public Presale">
        <PublicPreSale />
      </div>
      <div id="Documents">
        <OurDocuments />
      </div>
      <div id="Dev Team">
        <Team />
      </div>
      <div id="Listings">
        <Partnership />
      </div>
      <div id="Blog">
        <Blog />
      </div>
      <div id="Road Map">
        <Roadmap />
      </div>
    </div>
  );
};

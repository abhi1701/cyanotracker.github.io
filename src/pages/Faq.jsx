import React from 'react';
import Footer from '../components/Footer';
import Accordion from '../components/Accordian';


const Faq =() =>  {
  return (
  <>
    <div style={{ paddingTop: '80px' }}>
      <Accordion title={"What are cyanobacteria?"}><p>So, what are cyanobacteria? You may be more familiar with the terms "toxic algae", "blue-green algae," "pond scum," or some of you may be eating a beneficial form known as Spirulina in your morning smoothies. Cyanobacteria are some of the oldest photosynthetic bacteria that exist across the entire spectrum from helpful symbiosis to dangerous toxicity. Generally, they exist in benign levels of concentration, but environmental and anthropogenic factors can cause the populations to boom and form harmful mats or blooms. These are what we term "Cyano-HABs."</p></Accordion>
      <Accordion title={"What do CyanoHABs look like?"}><p>A CyanoHAB will often resemble the appearance like that of paint floating on the water surface. Although named "blue-green" algae, some blooms have also been associated with red, yellow and brown color. Unfortunately, the dazzling and innocuous colors of CyanoHABs don't fully reveal just how toxic they can be. Sometimes, a full scale problem may not be visually noticeable, as the bacteria are suspended within the water column.</p></Accordion>
      <Accordion title={"Where do CyanoHABs form?"}><p>Cyanobacteria harmful algal blooms usually form near the shoreline in eutrophic (low oxygen) freshwater systems, such as lakes and ponds. Look near low-flow regions where the current is minimal and obstructed by debris and other detritus material. Septic drainage and nutrient runoff have a high impact the growth of CyanoHABs, and therefore areas exposed to these events are more likely susceptible to bloom formation. Only rarely will these blooms explode in the middle of the water body at high concentrations, as in the case of Lake Eerie in 2003.</p></Accordion>
      <Accordion title={"How does it get so bad?"}><p>While cyanobacteria have existed on Earth for more than 3.5 billion years, certain anthropogenic and environmental factors can trigger a cause for worry. The aquatic health concerns arise when conditions are far more favorable for cyanobacteria than for other aquatic organisms. Cyanobacteria have the ability to utilize nutrients from an incident such as a septic tank leak or a massive runoff from a commercial farm more readily than other aquatic organisms. This can allow a CyanoHAB to occur that is so dense that light cannot reach the plants beneath the surface. Furthermore, decay and respiration from dense blooms in the night can deprive the fauna within the water of dissolved oxygen. The toxicity in some CyanoHABs has been known to cause massive fish kills - bringing about both environmental and economic damage.</p></Accordion>
      <Accordion title={"Why does it matter to you?"}><p>Bloom formations are disconcerting as there is currently no known antidote for the toxins that some species, i.e. microcystin sp. produce. Livestock may drink from contaminated water and fall ill. Beloved family pets have died from swimming in contaminated lakes and ponds. For those partaking in water for recreation use, ingestion and contact with cyanobacteria contaminated water can cause a myriad of issues, from digestive and liver damage, to skin and eye irritation, and possibly death.</p></Accordion>
      <Accordion title={"What are we doing about it?"}><p>We present an infrastructure for remote data acquisition using the spectral data from multiple deployable hyperspectral spectroradiometers spread across various water-bodies. Data would be transmitted at frequent intervals where real-time processing of spectral data would be done. Processing of spectral data would also involve running an accurate phycocyanin detection algorithm to predict cyanobacterial biomass. This cyber-infrastructure-based system will enable early detection and timely implementation of preemptive measures to reduce the frequency and severity of future CyanoHABs.</p></Accordion>
      <Accordion title={"What can one do about algal blooms, especially those caused by blue-green algae?"}><p>If you suspect a blue-green bloom is present and are unable to provide information to our cyber infrastructure, be sure to keep people and pets away from the bloom and avoid activities that may lead to contact with the water. If you suspect health effects from having had direct contact with a blue-green algae bloom, contact your doctor (or in the event of pet contact, call your veterinarian) immediately.</p></Accordion>
      <Accordion title={"What can a lakeshore and near-lake homeowner do to help prevent algal blooms?"}><p>Environmental Specialist Anthony Dodd from the Georgia Power Company has released some helpful tips for near-lake residents to prevent the onset of harmful algal blooms:</p><ul><li>Don't use more lawn or garden fertilizer than recommended, and keep fertilizer out of storm drains and off driveways and sidewalks</li><li>Maintain a buffer to native plants around shorelines and streams (native plants don.t require fertilizers and help filter water as well)</li><li>Properly care for and maintain household septic systems</li><li>Do not allow livestock or pet waste into the lake. Don't feed waterfowl</li><li>Prevent soil erosion</li></ul></Accordion>
    </div>  
    <Footer></Footer>
    
    </>
  );
}

export default Faq;
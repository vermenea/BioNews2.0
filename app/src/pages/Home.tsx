import { Link } from "react-router-dom";

const NEWS = [
  {
      'id': 'n1',
      'slug': 'sequencing-of-human-brain-uncovers-new-gene-transcripts',
      'title': 'Sequencing of the human brain uncovers new gene transcripts',
      'image': 'https://frontlinegenomics.com/wp-content/uploads/2021/07/2020-08-what-is-next-generation-sequencing.jpg',
      'date': '2024-03-01',
      'content': 'Researchers uncovered 214,516 unique isoforms in the developing neocortex -- over 70% of which have not been previously studied.',
      'url': 'https://www.sciencedaily.com/releases/2024/05/240523205011.htm'
  },
  {
      'id': 'n2',
      'slug': 'drug-like-inhibitor-preventing-flu',
      'title': 'Drug-like inhibitor shows promise in preventing flu',
      'image': 'https://ysm-res.cloudinary.com/image/upload/ar_1:1,c_fill,dpr_3.0,f_auto,g_faces:auto,q_auto:eco,w_500/v1/yms/prod/a67400d1-0f35-4a14-9724-b8e1e471e224',
      'date': '2022-05-01',
      'content': 'Currently available flu medications only target the virus after it has already established an infection, but what if a drug could prevent infection in the first place? Now, scientists have designed drug-like molecules to do just that, by thwarting the first stage of influenza infection.',
      'url': 'https://www.sciencedaily.com/releases/2024/05/240521132302.htm'
  },
  {
      'id': 'n3',
      'slug': 'gene-regulating-human-brain',
      'title': 'Scientists map networks regulating gene function in the human brain',
      'image': 'https://news.gsu.edu/files/2019/05/brainphysics.jpg',
      'date': '2021-02-01',
      'content': 'A consortium of researchers has produced the largest and most advanced multidimensional maps of gene regulation networks in the brains of people with and without mental disorders. These maps detail the many regulatory elements that coordinate the brains biological pathways and cellular functions. The research used postmortem brain tissue from over 2,500 donors to map gene regulation networks across different stages of brain development and multiple brain-related disorders.',
      'url': 'https://www.sciencedaily.com/releases/2024/05/240523153702.htm'
  },
  {
      'id': 'n4',
      'slug': 'new-approach-epstein-virus',
      'title': 'New approach to Epstein-Barr virus and resulting diseases',
      'image': 'https://www.mobitec.com/media/image/04/af/01/Epstein-Barr-Virus_600x600.png',
      'date': '2024-01-01',
      'content': 'The Epstein-Barr virus can cause a spectrum of diseases, including a range of cancers. Emerging data now show that inhibition of a specific metabolic pathway in infected cells can diminish latent infection and therefore the risk of downstream disease.',
      'url': 'https://www.sciencedaily.com/releases/2024/05/240523153711.htm'
  },
  {
      'id': 'n5',
      'slug': 'predicting-cancer-risks',
      'title': 'Predicting cancer risks on the basis of national health data',
      'image': 'https://www.usatoday.com/gcdn/media/2022/06/27/USATODAY/usatsports/MotleyFool-TMOT-3bf912f9-human-cancer-cell.jpg',
      'date': '2022-07-01',
      'content': 'Scientists are predicting individual risks for 20 different types of cancer with a high degree of accuracy. The prediction model could help to identify people with a high risk of cancer, for whom individualized early detection programs could be tested in studies.',
      'url': 'https://www.sciencedaily.com/releases/2024/05/240523112534.htm'
  },
  {
      'id': 'n6',
      'slug': 'genetic-mosaicism',
      'title': 'Genetic mosaicism more common than thought',
      'image': 'https://sharinghealthygenes.com/wp-content/uploads/2019/11/Mosaicism.jpg',
      'date': '2024-05-28',
      'content': 'Researchers found that approximately one in 40 human bone marrow cells carry massive chromosomal alterations without causing any apparent disease or abnormality. Even so-called normal cells carry all sorts of genetic mutations, meaning there are more genetic differences between individual cells in our bodies than between different human beings. The discovery was enabled by a single-cell sequencing technology called Strand-seq, a unique DNA sequencing technique that can reveal subtle details of genomes in single cells that are too difficult to detect with other methods.',
      'url': 'https://www.sciencedaily.com/releases/2024/05/240528115025.htm'
  },
  {
      'id': 'n7',
      'slug': 'CRISPR-trial',
      'title': 'Participants of pioneering CRISPR gene editing trial see vision improve',
      'image': 'https://www.citizen.org/wp-content/uploads/CRISPR-scaled.jpg',
      'date': '2024-05-06',
      'content': 'About 79% of clinical trial participants experienced measurable improvement after receiving experimental, CRISPR-based gene editing that is designed to fix a rare form of blindness, according to a new article.',
      'url': 'https://www.sciencedaily.com/releases/2024/05/240506131535.htm'
  },
  {
      'id': 'n8',
      'slug': 'birth-control-for-men',
      'title': 'A promising approach to develop a birth control pill for men',
      'image': 'https://e3.365dm.com/22/03/2048x1152/skynews-stock-pill-man-hand_5716099.jpg',
      'date': '2022-12-18',
      'content': 'Researchers show in animal models that a novel, non-hormonal sperm-specific approach offers a promising option for reversible human male contraception.',
      'url': 'https://www.sciencedaily.com/releases/2024/05/240523153614.htm'
  },
];

function Home() {
  return (
    <>
      <div className="home">
      <div className="posts">
        {NEWS.map(newsItem => (
          <>
          <div className="post" key={newsItem.id}>
            <div className="img">
            <img src={newsItem.image} alt={newsItem.title} />
            </div>
            <div className="content">
            <h2>{newsItem.title}</h2>
            <p>{newsItem.date}</p>
            <p>{newsItem.content}</p>
            <Link to={newsItem.url}>Read More</Link>
            </div>
          </div>
          
          </>
        ))}
      </div>
      </div>
    </>
  );
}

export default Home;

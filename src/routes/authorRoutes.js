const express = require("express");
const authorsRouter = express.Router();

function router(nav){

    var authors = [
        {
         name: "Dr. Abdul Kalam, Arun Tiwari",
         img: "kalam.jpg",
         about: "Avul Pakir Jainulabdeen Abdul Kalam (15 October 1931 – 27 July 2015) was an Indian aerospace scientist who served as the 11th President of India from 2002 to 2007. He was born and raised in Rameswaram, Tamil Nadu and studied physics and aerospace engineering. He spent the next four decades as a scientist and science administrator, mainly at the Defence Research and Development Organisation (DRDO) and Indian Space Research Organisation (ISRO) and was intimately involved in India's civilian space programme and military missile development efforts. He thus came to be known as the Missile Man of India for his work on the development of ballistic missile and launch vehicle technology. He also played a pivotal organisational, technical, and political role in India's Pokhran-II nuclear tests in 1998, the first since the original nuclear test by India in 1974."
        },
        {
         name: "J. K. Rowling",
         img: "jkr.jpg",
         about: "Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL (born 31 July 1965), better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies,[2][3] becoming the best-selling book series in history. The books are the basis of a popular film series, over which Rowling had overall approval on the scripts[5] and was a producer on the final films. She also writes crime fiction under the pen name Robert Galbraith."
        },
        {
         name: "M. T. Vasudevan Nair",
         img: "mtv.jpg",
         about: "Madath Thekkepaattu Vasudevan Nair (born 1933), popularly known as MT, is an Indian author, screenplay writer and film director. He is a prolific and versatile writer in modern Malayalam literature, and is one of the masters of post-Independence Indian literature.[2][3] He was born in Kudallur, a small village in the present day Anakkara panchayath in Pattambi Taluk, Palakkad district (Palghat), which was under the Malabar District in the Madras Presidency of the British Raj. He shot into fame at the age of 20 when, as a chemistry undergraduate, he won the prize for the best short story in Malayalam at World Short Story Competition conducted by The New York Herald Tribune. His debut novel Naalukettu (Ancestral Home- translated to English as The Legacy), wrote at the age of 23, won the Kerala Sahitya Akademi Award in 1958. His other novels include Manju (Mist), Kaalam (Time), Asuravithu (The Prodigal Son - translated to English as The Demon Seed) and Randamoozham (The Second Turn)."
        },
        {
         name: "William Hanna",
         img: "hanna.jpg",
         about: "William Denby Hanna (July 14, 1910 – March 22, 2001) was an American animator, voice actor, cartoonist, and musician. After working odd jobs in the first months of the Great Depression, Hanna joined the Harman and Ising animation studio in 1930. During the 1930s, Hanna steadily gained skill and prominence while working on cartoons such as Captain and the Kids. In 1937, while working at Metro-Goldwyn-Mayer (MGM), Hanna met Joseph Barbera. The two men began a collaboration that was at first best known for producing Tom and Jerry. In 1957, they co-founded Hanna-Barbera, which became the most successful television animation studio in the business, creating or producing programs; such as The Flintstones, The Huckleberry Hound Show, The Jetsons, Scooby-Doo, The Smurfs and Yogi Bear. In 1967, Hanna-Barbera was sold to Taft Broadcasting for $12 million, but Hanna and Barbera remained heads of the company until 1991. At that time, the studio was sold to Turner Broadcasting System, which in turn was merged with Time Warner in 1996; Hanna and Barbera stayed on as advisors."
        },
        {
         name: "Mahatma Gandhi",
         img: "mahatma.jpg",
         about: "Mohandas Karamchand Gandhi (2 October 1869 – 30 January 1948) was an Indian lawyer, anti-colonial nationalist, and political ethicist, who employed nonviolent resistance to lead the successful campaign for India's independence from British rule, and in turn inspired movements for civil rights and freedom across the world. The honorific Mahātmā (Sanskrit: great-souled, venerable), first applied to him in 1914 in South Africa, is now used throughout the world. Born and raised in a Hindu family in coastal Gujarat, western India, Gandhi trained in law at the Inner Temple, London, and was called to the bar at age 22 in June 1891. After two uncertain years in India, where he was unable to start a successful law practice, he moved to South Africa in 1893, to represent an Indian merchant in a lawsuit. He went on to live in South Africa for 21 years. It was in South Africa that Gandhi raised a family, and first employed nonviolent resistance in a campaign for civil rights. In 1915, aged 45, he returned to India. He set about organising peasants, farmers, and urban labourers to protest against excessive land-tax and discrimination."
        }
     ]
    
    authorsRouter.get("/",function(req,res){
    res.render("authors",
       {
         nav,
         title:"Library",
         authors
       });
    });
    
    
    
    authorsRouter.get("/:id", function(req,res){
    const id = req.params.id
    res.render("author",
        {
          nav,
          title:"Library",
          author: authors[id]
        });
    
    });
    return authorsRouter;
    }
    
    module.exports = router;
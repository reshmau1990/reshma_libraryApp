const express = require("express");
const booksRouter = express.Router();

function router(nav){

var books = [
    {
     title: "Wings of fire",
     author: "Dr. Abdul Kalam, Arun Tiwari",
     genre: "Autobiography",
     img: "apj.jpg",
     about: "Wings of Fire: An Autobiography of A P J Abdul Kalam (1999), former President of India. It was written by Dr. Abdul Kalam and Arun Tiwari. Dr. Kalam examines his early life, effort, hardship, fortitude, luck and chance that eventually led him to lead Indian space research, nuclear and missile programs. Kalam started his career, after graduating from Aerospace engineering at MIT (Chennai), India, at Hindustan Aeronautics Limited and was assigned to build a hovercraft prototype. Later he moved to ISRO and helped establish the Vikram Sarabhai Space Centre and pioneered the first space launch-vehicle program. During the 1990s and early 2000, Kalam moved to the DRDO to lead the Indian nuclear weapons program, with particular successes in thermonuclear weapons development culminating in the operation Smiling Buddha and an ICBM Agni (missile). Kalam died on 27 July 2015, during a speech at Indian Institute of Management in Shillong, Meghalaya."
    },
    {
     title: "Harry Potter",
     author: "J. K. Rowling",
     genre: "Fantasy",
     img: "potter.jpg",
     about: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people)."
    },
    {
     title: "Randamoozham",
     author: "M. T. Vasudevan Nair",
     genre: "Mythology",
     img: "randam.jpg",
     about: "Randamoozham (English: The Second Chance) is a 1984 Malayalam novel by Indian author M. T. Vasudevan Nair, widely credited as his masterpiece.[2] The work won the Vayalar Award, given for the best literary work in Malayalam, in 1985.[3] It also won the Muttathu Varkey Award in 1994. The novel has been translated to multiple languages. It was translated into English as Second Turn in 1997."
    },
    {
     title: "Tom and Jerry",
     author: "William Hanna",
     genre: "Cartoon",
     img: "tom.jpg",
     about: "This little 4-by-7 inch storybook from 1949 gives us not only some nice color and black and white illustrations, but a storyline based loosely on two theatrical cartoons. While only referred to as “the baby” here, the little orphan mouse is Nibbles (later named Tuffy), and the plot is taken from his first cartoon appearance The Milky Waif (1946). The book also uses some plot elements from Mouse Trouble (1944). The author and artist are unknown, but the publisher, Whitman, was a subsidiary of Western Publishing, which also published “Tom and Jerry” comic books under their Dell Comics banner."
    },
    {
     title: "The Story of My Experiments with Truth",
     author: "Mahatma Gandhi",
     genre: "Autobiography",
     img: "gandhi.jpg",
     about: "The Story of My Experiments with Truth (Gujarati: Satya Na Prayogo athva Atmakatha, lit. 'Experiments with Truth or Autobiography') is the autobiography of Mohandas K. Gandhi, covering his life from early childhood through to 1921. It was written in weekly installments and published in his journal Navjivan from 1925 to 1929. Its English translation also appeared in installments in his other journal Young India. It was initiated at the insistence of Swami Anand and other close co-workers of Gandhi, who encouraged him to explain the background of his public campaigns. In 1998, the book was designated as one of the 100 Best Spiritual Books of the 20th Century by a committee of global spiritual and religious authorities."
    }
 ]

booksRouter.get("/",function(req,res){
res.render("books",
   {
     nav,
     title:"Library",
     books
   });
});



booksRouter.get("/:id", function(req,res){
const id = req.params.id
res.render("book",
    {
      nav,
      title:"Library",
      book: books[id]
    });

});
return booksRouter;
}

module.exports = router;


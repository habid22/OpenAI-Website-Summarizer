import { useState, useEffect } from 'react'
import {copy, linkIcon, loader, tick} from '../assets/assets';
import { useLazyGetSummaryQuery } from '../services/article';

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });

  const [allArticles, setAllArticles] = useState([]);

  const [getSummary, { error, isFetching}] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem('articles')
    )

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage)
    }


  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
      console.log("this works");
      const { data } = await getSummary({ articleUrl: article.url });
  
      if (data?.summary) {
        const newArticle = { ...article, summary: data.summary }; // Change response.data.summary to data.summary
        const updatedAllArticles = [newArticle, 
          ...allArticles];


        setArticle(newArticle);
        setAllArticles(updatedAllArticles);

        localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
      
      }
    
  };




  return (
   <section className='mt-16 w-full max-w-xl'>
    {/* Search */}
    <div className='flex flex-col w-full gap-2'>
      <form className= "relative flex justify-center items-center"
       onSubmit={handleSubmit}
       >

        <img src={linkIcon} alt="link_icon" className='absolute left-0 my-2 ml-3 w-5'/>

        <input type="url" 
        placeholder="Paste a URL" 
        value={article.url}
        onChange={(e) => setArticle({ ...
        article, 
        url: e.target.value})}
        required
        className= "url_input peer"
        style={{ backgroundColor: '#3b4055',  borderColor: 'black' }}

        />

      <button
        type="submit"
        className="submit_btn peer-focus:text-gray-700 bg-purple-600 text-white px-4 py-2 rounded-lg ml-2 border-none flex items-center"
        style={{ backgroundColor: "#6864f4" }}
      >
        <span className="mx-auto">➤</span>
      </button>

            </form>
            {/* Browser URL History*/}
            <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
              {allArticles.map((item, index) => (
                <div
                key={`link-${index}`}
                onClick={() => setArticle(item)}
                className="link_card"
                >
                  <div className="copy-btn">
                    <img 
                      src={copy}
                      alt="copy_icon"
                      className="w-[40%] h-[40%] object-contain"
                    
                    />
                  
                  </div>
      
              
              
              
              
              </div>
              ))}
          </div>
        </div>
          {/* Display Results */}


   </section>
  )
}

export default Demo

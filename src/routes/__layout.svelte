<script>
    import Version from '../components/versions.svelte'
    import Books from '../components/books.svelte';
    import Chapters from '../components/chapters.svelte';
    import Verses from '../components/verses.svelte'    
</script>

<svelte:head><title>God's word for today!</title></svelte:head>
<div>
    <div class='SelectionbarContainer'>
        <div class='selectionBar'>
            <Version/>
            <Books/>
            <Chapters/>  
        </div> 
    </div> 
    <div class='verseContainer'>
        <Verses/>      
    </div>        
</div>
<style>
    :global(*){         
	    margin: 0;
	    padding: 0;
	    font-size: 1.03em; 
    } 
    
    :global(.SelectionbarContainer) {            
        background-color: #feffdd;
        width: 100%;
        border-top: none;
        border-bottom: 7px double #00f;
        padding-bottom: 15px;
        padding-top: 15px;
        position: fixed;
        overflow: hidden;
        top: 0;
    }
  
    :global(.selectionBar) {
        margin: auto;
        text-align-last: center;
    } 
    
	:global(.SelectorLabel) {        
    	border-top: 1px solid #000;
    	border-left: 1px solid #000;
    	border-bottom: 1px solid #000;
    }
    
	:global(.selectionList) {
        background-color: #0c00c6;
        color           : white;
        border-top      : 2px solid cyan;
        border-bottom   : 2px solid cyan;
        border-left     : 2px solid cyan;
        border-right    : 2px solid cyan;

	 }
 
    
    :global(select){
        font-size: 20pt;
    }
    
    :global(option){
        font-size:20pt;
    }
    
    :global(.versionContainer .chapterContainer .booKContainer)
    {
        background-color:  #feffdd; 
        display: flex;
        width:30%;
    } 
    
    :global(.booKContainer)
    {
        background-color:  #feffdd;
        display: flex;
        width:fit-content;
    } 
     
    :global(.SearchVerseContainer) {
        margin-left : 14px;
        margin-right: 14px;
        margin-top  : 61px;
    }
    
    :global(.versionLabel)
    {
        background-color:  #feffdd;
        display: flex;
    } 
    :global(.bookLabel)
    {
        background-color:  #feffdd;
        display: flex;
    } 
    
    :global(.chapterLabel)
    {
        background-color:  #feffdd;
        display: flex;
    } 
 
    :global(.verseContainer)
    {
        display: block;
	    margin-top: 60px;
    } 
    
    :global(.VerseNumber)
    {
        color               : blue;
        display             : contents; 
    }
    
    :global(.Verseparagraph)
    {
        color        : blue;
    display      : inline;
    padding-right: 5px;

    }
    
    :global(body)
    {       
        font-family:    "verdana", "Roboto", "Oxygen", "Ubuntu", 
                        "Cantarell", "Fira Sans", "Droid Sans", 
                        "Helvetica Neue", sans-serif;
    }
    
    :global(.verseSpan) {
    padding-right: 5px;
    display      : flex;
    margin-bottom: 14px;
}

    
    :global(.VerseText)
    {
        padding-left: 7px;
        display     : block;    
    }
      
        
    :global(.verseReadingPane) {
        
        margin-left   : auto;
    margin-right  : auto;
    padding-top   : 33px;
    padding-bottom: 25px;
    width         : 60%;
    border-left   : 7px double red;
    border-right  : 7px double red;
    padding-left  : 10px;
    padding-right : 10px;

    }
     
 
</style>
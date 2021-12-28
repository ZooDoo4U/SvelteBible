import axios from 'axios';

import { writable } from 'svelte/store';

export let CurrentVersion = writable('amp');
export let CurrentBook = writable('gen');
export let CurrentChapter = writable('1');

export let BibleVersions = writable([]);
export let BibleBooks = writable([]);
export let BibleChapters = writable([]);
export let BibleVerses = writable([]);

let bibleUrl = "http://67.161.115.52:8033/bible";

export const GetBibleVersions = async () =>
{ 
    let data = (await axios.get(`${bibleUrl}/GetVersions`)).data;
    BibleVersions.set(data);
 }

export const GetBookAbbreviations = async (version) =>
{
    let data = (await axios.get(`${bibleUrl}/${version}/BookAbbreviations`)).data;
    BibleBooks.set(data);
}

export const GetChaptersForBook = async (version, book) =>
{
    let data = (await axios.get(`${bibleUrl}/${version}/GetNumberOfChapters/${book}`)).data;
    let numChapters = parseInt(data);
    let chapterArray = [];
    for (let i = 1; i <= numChapters; i++)
    {
        chapterArray.push(`${i}`);
    }
    BibleChapters.set(chapterArray);   
}

export const GetVerseText = async (version, book, chapter) =>
{ 
    try
    {           
        let data = (await axios.get(`${bibleUrl}/${version}/ReadAllVersesInChapter/${book}/${chapter}`)).data;
        BibleVerses.set(data);
    }
    catch
    {
        //
        //  This shouldn't happen any more...  On Book change we set the current chapter to 1.
        //
        
        //  most often this will catch if...  The use is looking at a book/chapter 
        //  that has 'say 20 chaptes and looking at say chapter 15. <BUT>...  The next chapter they scroll to
        //  only had 5, so we can't get chapter 15 when 5 is max...   So we just set the Current chapter to 1
        //  and refetch...  (simple ;) 
        alert('ouch...')
        $CurrentChapter  =1; 
        let data = (await axios.get(`${bibleUrl}/${version}/ReadAllVersesInChapter/${book}/${1}`)).data;
        BibleVerses.set(data);
    }
}

export const WheelScroll = (e,handler) => 
{

    let numElements = e.target.options.length;
    let newIdx = -1;

    if (e.deltaY < 0) 
    {
        newIdx = e.target.options.selectedIndex - 1;
    }
    else 
    {
        newIdx = e.target.options.selectedIndex + 1;
    }

    if (newIdx < 0 || newIdx >= numElements)
    {
        return;
    }
    e.target.options.selectedIndex = newIdx;
    handler(e);
};

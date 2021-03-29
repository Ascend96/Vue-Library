function LibraryItem(media, removeMethod, addToCartMethod){
    // list of possible status (enum)
    const STATUSES = {CHECKED_OUT: 'out', AVAILABLE: 'in'};

    const CARTSTATUS = {IN_CART : false};

    // set the default status
    media.status = STATUSES.AVAILABLE;
    media.cartStatus = CARTSTATUS.IN_CART;

    // methods
    media.checkIn = function(){
        this.status = STATUSES.AVAILABLE;
    }

    media.checkOut = function(){
        this.status = STATUSES.CHECKED_OUT;
    }

    media.isAvailable = function(){
        return this.status === STATUSES.AVAILABLE;
    }
    media.inCart = function(){
        this.cartStatus = true;
    }

    if(removeMethod){
        // option 1
        // media.remove = function(){
        //     removeMethod(this);
        // }
        // option 2
        media.remove = removeMethod;
    }

    if(addToCartMethod){
        media.add = addToCartMethod;
    }

    // if(removeFromCartMethod){
    //     media.cart = removeFromCartMethod;
    // }

    return media;
}

//let book = new LibraryItem('Interaction Design', 200);
//let movie = new LibraryItem('Strange Brew', null,92);

function Book(title, pages, stock){
    this.title = title;
    this.pages = pages;
    this.stock = stock;
}


// same as
class Movie{
    constructor(title, runtime, stock) {
        this.title = title;
        this.runtime = runtime;
        this.stock = stock;
    }
}

function Album(title, artist, trackCount, stock){
    this.title = title;
    this.artist = artist;
    this.trackCount = trackCount;
    this.stock = stock;
}

// export for use as JS modules
export {LibraryItem, Book, Movie, Album}
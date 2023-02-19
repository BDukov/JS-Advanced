class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space <= 0) {
            throw new Error(`Not enough space in the cellar.`);
        }

        this.wines.push({
            wineName,
            wineType,
            price,
            paid: false
        })
        this.space--;
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const wine = this.wines.find(w => w.wineName === wineName);
        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if (wine.paid) {
            throw new Error(`${wineName} is already been paid.`);
        }

        wine.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const wine = this.wines.find(w => w.wineName === wineName);
        if (!wine) {
            throw new Error(`The wine, you're looking for, is not found.`);
        }
        if (!wine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }
        const index = this.wines.findIndex((w) => w.wineName === wineName);

        this.wines.splice(index, 1);
        this.space++;
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        let winesOutput = this.wines;
        let output = '';
        const emptySpace = this.space;
        const totalBill = this.bill;
        const wineOutputInfo = winesOutput
        .sort((a, b) => a.wineName.localeCompare(b.wineName))
        .map((w) => `${w.wineName} > ${w.wineType} - ${w.paid ? 'Has Paid' : 'Not Paid'}.`)
        .join('\n');

        if (wineType) {
            winesOutput = this.wines.filter((w) => w.wineType === wineType);
            if (winesOutput.length === 0) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }
            output = `${wineOutputInfo}`;
            return output;
        }

        // if (this.bill === 0) {
        //     output = `${wineOutputInfo}`;
        // }
        output = `You have space for ${emptySpace} bottles more.\nYou paid ${totalBill}$ for the wine.\n${wineOutputInfo}`;
        return output;
    }
}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

const selection = new WineSelection(2)
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
console.log(selection.cellarRevision('Rose'));

// const selection = new WineSelection(5)
// selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
// selection.payWineBottle('Bodegas Godelia Mencía', 144);
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// console.log(selection.cellarRevision());



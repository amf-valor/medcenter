import { MatSnackBar } from '@angular/material';

export abstract class BaseComponent{
    
    private _isProgressVisible: boolean;
    
    constructor(protected snackBar: MatSnackBar){}

    get isProgressVisible(): boolean{
        return this._isProgressVisible
    }

    showSnackBar(message: string) {
        this.snackBar.open(message, "Ok", {
            duration: 3000,
        });
    }

    protected hideProgress(): void{
        this._isProgressVisible = false;
    }

    protected showProgress(): void{
        this._isProgressVisible = true;
    }

    protected scrollToTop(): void {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }
}
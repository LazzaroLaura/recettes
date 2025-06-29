import { Component } from '@angular/core';

@Component({
  selector: 'cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.less']
})
export class CookiesComponent {
  public Ingredients: Map<string, number> = new Map();

  public Amount: number = 8;
  public Butter: number = 15.62;
  public CocoSugar: number = 12.5;
  public WhiteSugar: number = 9.3;
  public Eggs: number = 1;
  public VanillaExtract: number = 1;
  public Flour: number = 33.125;
  public BakingPowder: number = 1.5;
  public Salt: number = 0.5;

  ngOnInit() {
    this.ResetIngredientAmount();
  }

  public UpdateAmount(type: string) {
    this.Amount = type === "less" ? this.Amount - 1 : this.Amount + 1;
    this.ResetIngredientAmount();
  }

  private UpdateIngredientsAmount() {
    for (let [key, value] of this.Ingredients) {
      if (key === "Eggs" || key === "Salt" || key === "BakingPowder" || key === "VanillaExtract") {
        this.Ingredients.set(key, value * this.Amount);
      }
      else {
        this.Ingredients.set(key, Math.round(value * this.Amount));
      }
    }
  }

  private ResetIngredientAmount() {
    this.Ingredients.set("Butter", 15.62).set("CocoSugar", 12.5).set("WhiteSugar", 9.4).set("Eggs", 0.12).set("VanillaExtract", 0.12).set("Flour", 33.125).set("BakingPowder", 0.19).set("Salt", 0.06);
    this.UpdateIngredientsAmount();
  }
}

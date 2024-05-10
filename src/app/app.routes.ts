import { Routes } from "@angular/router";
import { HomeComponent } from "./page/home/home.component";
import { TratteComponent } from "./page/tratte/tratte.component";
import { ChisiamoComponent } from "./page/chisiamo/chisiamo.component";
import { PlaylistPageComponent } from "./page/playlist-page/playlist-page.component";
import { NotfoundComponent } from "./page/notfound/notfound.component";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "tratte",
        component: TratteComponent,
    },
    {
        path: "tratte/:id",
        component: PlaylistPageComponent
    },
    {
        path: "chisono",
        component: ChisiamoComponent
    },
    {
        path: "**",
        component: NotfoundComponent
    }
]
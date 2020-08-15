import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule }  from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { ImageUploadModule } from "angular2-image-upload";
import { FileSelectDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { SongDetailComponent } from './components/song-detail/song-detail.component';
import { SearchComponent } from './components/search/search.component';
import { SearchPipe } from './pipes/filter.pipe';
import { ReproducerComponent } from './components/reproducer/reproducer.component';
import { TrackSongComponent } from './components/track-song/track-song.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditInputComponent } from './components/edit-input/edit-input.component';
import { ModalComponent } from './components/modal/modal.component';

//firebase
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    SongDetailComponent,
    SearchComponent,
    SearchPipe,
    ReproducerComponent,
    TrackSongComponent,
    EditInputComponent,
    ModalComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatGridListModule,
    MatFileUploadModule,
    ImageUploadModule.forRoot(),
    //firebase
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalComponent
  ]
})
export class AppModule { }

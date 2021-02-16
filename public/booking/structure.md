## 📂Config
In this workspace we have everything that is related to configuring the widget. In here you can add a custom local config file as well as custom theme files.

### File Structure
- __config__
   - __cert__
     - csr.pem
     - key.pem
     - server.crt
   - node\_modules
   - package.json
   - __src__
     - build.ts
     - constants.ts
     - settings.json
     - settings.local.json
     - settings.ts
     - __theme__
       - defaultTheme.ts
   - tsconfig.json
   - webpack.config.ts

### Cert
This folder keeps an https certificate that is used when starting the widget in development mode so that it runs on https.

### Src
This is the main folder of the Config workspace. In this folder you need to create a settings.local.json file which will overwrite the default settings.json file.  This file will have all the settings needed for the widget.

### Theme
In this folder we have the defaultTheme.ts file which is the default widget theme file. In this folder you can add different theme files to fully customize the widget style. When adding a new theme file you need to duplicate the defaultTheme.ts file and change its name. There are more things to do when creating a new theme file but we will need to create a command which will automate the process as it is a bit cumbersome to do it manually.
In order for the widget to use the new theme you need to specify the file name in the settings.json file under the “theme” parameter. You need to specify only the file name without the extension.

### Settings.json
This is the default settings file. Right now it has settings set in it but in the end this will be empty and we will automatically create a settings.local.json file so that there is no need to create it manually. 

<hr>

## 📂Web
This workspace was added in order for users to extend the core components in case they want to add custom functionality. This feature is not yet developed but we will try to figure out how to do that. For now, in here we keep the initialization files. The app is started from this workspace. We also keep assets that users will want to add to the default theme and also assets that can be used in the settings file, like tiles images and icons.

### File Structure
- __web__
   - README
   - __assets__
     - __img__
   - node\_modules
   - package.json
   - __public__
     - index.html
   - __src__
     - App.tsx
     - index.scss
     - index.tsx
     - react\-app\-env.d.ts
     - __templates__
       - app.html
   - tsconfig.json

### Assets
In this folder user can add assets like images that will be transferred to the build folder. Thse assets can be used in different steps configured in the settings.jsonjson) file. Also they can be used in the custom themes that users can create.

### Src
This folder keeps the application initialization file. From this folder the app is being initialized.

<hr>

## 📂Core
In this workspace we have the core components of the widget. This area will need to remain unedited by the users if they want to have forward compatibility with changes that we will add in the future. Users can modify or add files to this folder but they will need to take care of fixing conflicts that will arise when we do more commits along the way. I will explain each folder/file in this workspace at a later date as this is not yet finished and modifications will still be done to this workspace. 

### File Structure
- __core__
   - node\_modules
   - package.json
   - __src__
     - __components__
       - __Calendar__
         - SetsterCalendar.tsx
         - SetsterCalendarMonth.tsx
         - SetsterCalendarMonths.tsx
         - SetsterCalendarTimezone.tsx
       - Cancel.tsx
       - ImageMap.tsx
       - Info.tsx
       - Interogations.tsx
       - List.tsx
       - Loading.tsx
       - LocationsMap.tsx
       - Navigator.tsx
       - Reschedule.tsx
       - StepNavigation.tsx
       - Submit.tsx
       - Success.tsx
       - Tiles.tsx
     - __hooks__
       - filters.ts
       - linksCheck.ts
       - stripe.tsx
       - subItemsCheck.ts
       - widgetSize.ts
     - __interfaces__
       - location.interface.ts
       - provider.interface.ts
       - service.interface.ts
     - __statemanagement__
       - __actions__
         - AppStateActions.ts
       - __contexts__
         - AnimationContext.ts
         - AppContext.ts
         - PersistentContext.ts
         - StripeContext.ts
         - StylesContext.ts
       - __reducers__
         - AppReducer.ts
       - __states__
         - AnimationState.ts
         - AppState.ts
         - PersistentState.ts
   - tsconfig.json
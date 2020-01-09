# Using Standalone Angular Elements within Angular

## Build and Execute

- Build widget: ``npm run build:widget``
  - This also copies the bundle to the host app (``/src/assets/``)
- Start host application: ``npm start``

## Solution

In order to allow data binding in the host application to the standalone Angular Element, we have to do two things.

### 1. Share NgZone

This little hack makes sure, both Angular apps, the host and the standalone Element, use the same instance of NgZone.

```typescript
// app.component.ts in host application
constructor(private zone: NgZone) {
  // HACK to share zone with child widget
  (window as any).zone = zone;
}
```

Then, use this zone instance when bootstraping the standalone element:

```typescript
platformBrowserDynamic()
    .bootstrapModule(AppModule, { ngZone: (window as any).zone })
    .catch(err => console.error(err));
```

### 2. Don't use Angular-based Data Binding BEFORE the Standalone Element is Loaded

In this case, I set the property loaded to true after the standalone element was loaded.

```html
<div *ngIf="loaded">
    <demo-widget [input]="data"></demo-widget>
</div>
```

This is esp necessary when loading bundles on demand which is the case in this example.


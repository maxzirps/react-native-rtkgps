package com.reactnativertkgps;

import android.util.Log;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class RtkGpsBridge extends ReactContextBaseJavaModule {

  private static final String TAG = "RtkGpsBridge";
  private static ReactApplicationContext reactContext;

  RtkGpsBridge(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

   @Override
  public String getName() {
    return "RtkGpsBridge";
  }

  @ReactMethod
  public void start() {
    Log.d(TAG, "START RTK");
  }
}
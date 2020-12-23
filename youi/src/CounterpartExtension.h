#pragma once

#include <youireact/NativeModule.h>
#include <youireact/modules/EventEmitter.h>

class YI_RN_MODULE(CounterpartExtension, yi::react::EventEmitterModule) {
public:
    CounterpartExtension();
    YI_RN_EXPORT_NAME(CounterpartExtension);
    YI_RN_EXPORT_METHOD(extendCounterpart)(uint64_t tag);
};


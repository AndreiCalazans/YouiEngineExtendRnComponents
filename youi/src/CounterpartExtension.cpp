#include "CounterpartExtension.h"

#include <youireact/NativeModuleRegistry.h>
#include <scenetree/YiSceneManager.h>

#include <youireact/IBridge.h>
#include <youireact/ShadowTree.h>

using namespace folly;
using namespace std;

const CYIString TAG = "CounterpartExtension";

YI_RN_INSTANTIATE_MODULE(CounterpartExtension, yi::react::EventEmitterModule);
YI_RN_REGISTER_MODULE(CounterpartExtension);


YI_RN_DEFINE_EXPORT_METHOD(CounterpartExtension, extendCounterpart)(uint64_t tag)
{
    // ShadowRegistry contains all of the items available in the ShadowTree (similar to the virtual DOM).
    auto &shadowRegistry = GetBridge().GetShadowTree().GetShadowRegistry();
    auto pComponent = shadowRegistry.Get(tag);
    YI_ASSERT(pComponent, TAG, "Shadow view with tag %" PRIu64 " not found in ShadowRegistry.", tag);

    // For every React Native component we have a corresponding Widget (counterpart) in the Engine. 
    auto pCounterpart = pComponent->GetCounterpart(); //CYISceneNode 
    YI_ASSERT(pCounterpart, TAG, "Shadow view with tag %" PRIu64 " doesn't have a counterpart.", tag);

    pCounterpart->DescendantLostFocus.Connect([](){
        // Do what you need here.
    });
    
    pCounterpart->DescendantGainedFocus.Connect([](){
        // Do what you need here.
    });

    pCounterpart->DescendantsChangedFocus.Connect([](){
        // Do what you need here.
    });
}

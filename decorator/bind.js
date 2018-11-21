export default function (target, name, descriptor) {
    descriptor.value.bind(target);
}